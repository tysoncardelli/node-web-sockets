const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');


const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
//app.use(require('./controllers/usuario'));

// IO = esta es la comunicacion dcon el backend
//let io = socketIO(server);
module.exports.io = socketIO(server);

require('./sockets/socket.js')
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});