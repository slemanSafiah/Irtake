const {
  create,
  create1,
  getInsts,
  getInst,
  deleteInst,
  incStd,
  getInstByEmail,
  getInstByName,
  getInstByMobilNumber,
  updateInst,
  change_password,
} = require("./inst.services");

const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
  createInst: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    create(body, (err, results) => {
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
  createInst1: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = "123";
    body.password = hashSync(body.password, salt);
    create1(body, (err, results) => {
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
  getInsts: (req, res) => {
    getInsts(null, (err, results) => {
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
  getInst: (req, res) => {
    const body = req.body;
    getInst(body, (err, results) => {
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
  getInstByName: (req, res) => {
    const body = req.body;
    getInstByName(body, (err, results) => {
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
  getInstByEmail: (req, res) => {
    const body = req.body;
    console.log(body);
    getInstByEmail(body, (err, results) => {
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
  getInstByMobilNumber: (req, res) => {
    const body = req.body;
    getInstByMobilNumber(body, (err, results) => {
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
  deleteInst: (req, res) => {
    const body = req.body;
    deleteInst(body, (err, results) => {
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
  updateInst: (req, res) => {
    const body = req.body;
    updateInst(body, (err, results) => {
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
    getInstByMobilNumber(body, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (results.length == 0) {
        return res.json({
          success: 0,
          data: "invalid email or password",
        });
      }
      body.id = results[0].id;
      const result = compareSync(body.password, results[0].password);
      if (result) {
        results.password = undefined;
        const jsontoken = sign({ result: results }, "qwe1234", {});
        return res.json({
          success: 1,
          message: "login sucssfuly",
          token: jsontoken,
          inst: body.id
        });
      } else {
        return res.json({
          success: 0,
          data: "Invalid email or password2",
        });
      }
    });
  },
  change_password: (req, res) => {
    const body = req.body;
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
  },
};
