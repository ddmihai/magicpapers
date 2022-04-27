const express   = require('express');
const app       = express();
const cors      = require('cors');
const path      = require('path');



/* Security */
app.use(cors('*'));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });



/* Body parser */
app.use(express.json());

/* Static files for images and views*/
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/public', express.static(path.join(__dirname, 'public')));


/* Routes */
const userRouter    = require('./router/users.js');
const emails        = require('./router/emails.js');
const tickets       = require('./router/tickets.js');
const admin         = require('./router/admin.js');
const comments      = require('./router/comments.js');
const selectors     = require('./router/selectors.js');

/* Endpoints */
app.use('/api', userRouter);
app.use('/api', emails);    
app.use('/api', tickets);
app.use('/api', admin);
app.use('/api', comments);
app.use('/api', selectors);


/* Export the app express module */
module.exports = app;