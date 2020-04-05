// server.js
const express = require("express")
const app = express()
app.use(express.static("public"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html") 
  /* this sends the "index.html" file when people go to your-app.glitch.me/ */
})

app.get("/send", (req, res) => {
// where your node app starts
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  }
});

var mailOptions = {
  from: process.env.USER,
  to: "8106183110@vtext.com",
  subject: "Test image of dog, you're welcome",
  text: '',
  attachments: [
    {
      filename: 'butter.jpeg',
      path: 'https://post.healthline.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg',
      cid: 'uniq-butter.jpeg' 
    }
  ]
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 
  
  res.redirect("/sent.html") // after sending the email, redirect back to "index.html" at your-app.glitch.me/
})
app.listen(3000);
