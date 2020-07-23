const {
  updateAdmin,
  getAdminByEmail,
  add_admin
} = require("./admin.service");

const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
  add_admin: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    add_admin(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: 'database connection error'
        });
      }
      return res.status(200).json({
        success: 1,
        data: results
      })
    });
  },
  updateAdmin: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.newpass, salt);
    updateAdmin(body, (err, results) => {
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
    getAdminByEmail(body, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (results.length == 0) {
        return res.json({
          success: 0,
          data: "invalid email or password",
        });
      }
      const result = compareSync(body.password, results[0].password);
      console.log(body.password, results[0].password);
      if (result) {
        results.password = undefined;
        const jsontoken = sign({ result: results }, "qwe1234", {});
        return res.json({
          success: 1,
          message: "login sucssfuly",
          token: jsontoken,
        });
      } else {
        return res.json({
          success: 0,
          data: "Invalid email or password2",
        });
      }
    });
  },
};
