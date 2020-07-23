const {
  addFile,
  getFile,
  deleteFile,
  getFiles,
  addSection,
} = require("./files.controller");

const { checkToken } = require('../../auth/token_validation');
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const nodemailer = require("nodemailer");


//set storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, path.join(__dirname + "/upload/"));
  },
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}_${path.extname(file.originalname)}`);
  },
});

//init upload
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 50000000,
  },
});

//set storage engine
const storage1 = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, path.join(__dirname + "/upload/"));
  },
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}_${path.extname(file.originalname)}`);
  },
});

//init upload
const upload1 = multer({
  storage: storage1,
  limits: {
    fileSize: 50000000,
  },
});


/*-----------------------------------------------------------------------*/
/*-----------------------------------------------------------------------*/


router.post("/add_image", addSection);

/*-----------------------------------------------------------------------*/
/*-----------------------------------------------------------------------*/

router.post("/add_file", upload.array("file"), checkToken, (req, res) => {
  const output = `
  <p>You have a new contact request</p>
  <h3>Contact Details</h3>
  homework
  sender name : ${req.body.name}
  sender number : ${req.body.number}
    <h3>Messages</h3>
    `;
  //create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "feras12t@gmail.com",
      pass: "feras123Mohmd",
    },
  });
  const files = req.files;
  console.log(req.files);
  const att = files.map((file) => {
    return { filename: file.name, path: file.path };
  });
  let mailOptions = {
    from: `${req.body.email}`, // sender address
    to: "irtakiapp@gmail.com", // list of receivers
    subject: "homework", // Subject line
    text: "there is my answer", // plain text body
    html: output, // html body
    attachments: att
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);

    return res.json({ msg: "Email has been sent" });
  });
});

/*-----------------------------------------------------------------------*/
/*-----------------------------------------------------------------------*/

router.post("/delete_file", checkToken, deleteFile);

/*-----------------------------------------------------------------------*/
/*-----------------------------------------------------------------------*/

router.post("/get_file", checkToken, getFile);

/*-----------------------------------------------------------------------*/
/*-----------------------------------------------------------------------*/

router.get("/get_files", checkToken, getFiles);

/*-----------------------------------------------------------------------*/
/*-----------------------------------------------------------------------*/

router.post("/send_email", checkToken, (req, res) => {
  const output = `
        <p>You have a new contact request</p>
        <p>Name : ${req.body.name}</p>
        <p>Email : ${req.body.email}</p>
        <p>Phone Number : ${req.body.number}</p>
        <p>Message : ${req.body.message}</p>
    `;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "feras12t@gmail.com",
      pass: "feras123Mohmd",
    },
  });

  let mailOptions = {
    from: ` ${req.body.email}`, // sender address
    to: "irtakiapp@gmail.com", // list of receivers
    subject: "E-mail message", // Subject line
    text: `Hello it is ${req.body.name}`, // plain text body
    html: output, // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    res.render("contact", { msg: "Email has been sent" });
  });
});


module.exports = router;
