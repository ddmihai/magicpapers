const express = require('express');
const app = express();
const cors = require('cors');


/* Security */
const helmet = require('helmet');
app.use(helmet());
app.use(cors());

/* Body parser */
app.use(express.json());

/* Routes */
const userRouter = require('./router/users.js');

app.use('/api', userRouter);







/* Export the app express module */
module.exports = app;