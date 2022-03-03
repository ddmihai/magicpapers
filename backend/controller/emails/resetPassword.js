const {sendEmail} = require('../../services/nodemailer.js');
const fs = require('fs');
const path = require('path');

exports.reset = (req, res, next) => {
    const {userID, email} = req.body;
    
    res.send('Email send.');
    
    sendEmail(email, {
        subject: 'Password recovery',
        text: 'Please use this page to reset your password. Your password will be securey stored in our database and will be available imediatelly.',
        html: emailTemplateSource
    });
}