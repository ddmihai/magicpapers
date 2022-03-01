/* 
    Create the server
*/

const app   = require('./app.js');
const http  = require('http');
const port  = 3000 || Process.env.port; 



/* 
    For the development purpose, the server function will log the error 
*/
const server = http.createServer(app);
server.listen(port, error => {
    if (error) console.log(error);
    else return console.log('Server online');
})