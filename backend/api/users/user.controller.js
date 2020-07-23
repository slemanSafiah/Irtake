const {
  create,
  getUsers,
  getUserBynumber,
  getUsersByName,
  deleteUser,
  change_password,
  getInstId,
  getUserInst
} = require("./user.service");

const { genSaltSync, hashSync, compareSync } = require("bcrypt");

const { sign } = require("jsonwebtoken");

module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    getUserInst(body, (err, results1) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "database connection error",
        });
      }
      if (results1.length === 0) {
        body.inst = 0;
      } else {
        body.inst = results1[0].inst_name;
      }
      create(body, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "database connection error",
          });
        }
        const jsontoken = sign({ result: results }, "qwe1234", {
          expiresIn: "1h",
        });
        return res.json({
          success: 1,
          message: "login sucssfuly",
          token: jsontoken,
          inst: body.inst
        });
      });
    })
  },
  getAllUsers: (req, res) => {
    getUsers(null, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "database connection error",
        });
      }
      console.log(results)
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getUserByNumber: (req, res) => {
    const body = req.body;
    getUserBynumber(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  login: (req, res) => {
    const body = req.body;
    console.log(body);
    getInstId(body, (err, results1) => {
      body.inst = 0;
      if (results1) {
        console.log(results1);
        body.inst = results1.inst_name;
        getUserBynumber(body, (err, results) => {
          if (err) {
            console.log(err);
          }
          if (!results) {
            return res.json({
              success: 0,
              data: "invalid email or password",
            });
          }
          body.name = results.name
          const result = compareSync(body.password, results.password);
          if (result) {
            results.password = undefined;
            const jsontoken = sign({ result: results }, "qwe1234", {});
            return res.json({
              success: 1,
              message: "login sucssfuly",
              token: jsontoken,
              inst: body.inst,
              name: body.name
            });
          } else {
            return res.json({
              success: 0,
              data: "Invalid email or password2",
            });
          }
        });
      }
    })
  },
  getUsersByName: (req, res) => {
    const body = req.body;
    getUsersByName(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  deleteUser: (req, res) => {
    const body = req.body;
    deleteUser(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  change_password: (req, res) => {
    const body = req.body;
    getUserBynumber(body, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          success: 0,
          data: "invalid email or password",
        });
      }
      const salt = genSaltSync(10);
      body.newPassword = hashSync(body.password, salt);
      change_password(body, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "database connection error",
          });
        }
        return res.status(200).json({
          success: 1,
          data: results,
        });
      });
    });
  },
};
