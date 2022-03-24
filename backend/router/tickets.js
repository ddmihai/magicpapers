const express = require('express');
const router = express.Router();

/* Middleware */
const auth = require('../middleware/jwt.js');

/* COntrollers */
const createTicket = require('../controller/tickets/createTicket.js');
const deleteTicket = require('../controller/tickets/deleteTicket.js');
const getTickets   = require('../controller/tickets/getAllTickets.js');


router.post('/create-ticket',   auth, createTicket.add);
router.delete('/delete-ticket', auth, deleteTicket.delete);
router.get('/get-tickets/:id',      getTickets.get);

module.exports = router;