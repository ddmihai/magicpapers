const express   = require('express');
const app       = express();
const cors      = require('cors');
const path      = require('path');
const helmet    = require('helmet');


/* Security */
app.use(helmet());
app.use(cors());

/* Body parser */
app.use(express.json());

/* Static files for images and views*/
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/public', express.static(path.join(__dirname, 'public')));



/* Routes */
const userRouter = require('./router/users.js');
const emails = require('./router/emails.js');
const tickets = require('./router/tickets.js');

/* Endpoints */
app.use('/api', userRouter);
app.use('/api', emails);    
app.use('/api', tickets);




/* Export the app express module */
module.exports = app;