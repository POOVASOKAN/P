const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors"); // Add this line
require("dotenv").config(); // Load environment variables

const app = express();
const port = 3000;

// Enable CORS
app.use(cors()); // Add this line

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the public directory
app.use(express.static("public"));

// Handle form submission
app.post("/submit-form", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // Log form data to check if received correctly
  console.log(req.body);

  // Configure the email transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password
    },
  });

  // Email options
  const mailOptions = {
    from: process.env.MAIL_USER, // Sender address
    to: process.env.EMAIL_USER, // Your email address (you'll receive the email)
    subject: "New Contact Form Submission",
    text: `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    replyTo: email, // This will set the reply address to the user's email
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
