const nodemailer = require('nodemailer');
require('dotenv').config()


exports.sendEmail = async (userEmail, options) => {
      let transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com", 
        secureConnection: false, 
        port: 587, 

        tls: {
          ciphers:'SSLv3',
          rejectUnauthorized: false
        },
          auth: {
              user: process.env.BUSINESS_EMAIL,
              pass: process.env.EMAIL_PASSWORD
          }
      });

      let mailOptions = {
          from: process.env.BUSINESS_EMAIL,
          to: userEmail,
          subject: options.subject,
          text: options.text,
          html: options.html
      }

      transporter.sendMail(mailOptions, (error, success) => {
        if (error) return console.log(error);
        else return console.log('Email send');
      })
}