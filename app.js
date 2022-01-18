//aqui tendremos el servidor
const express = require('express');
const bodyParser = require('body-parser');

const router = require('./network/routes');

const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));

router(server);

const port = 3000;

server.use('/server', express.static('public'));

server.listen(port);
console.log(`server listening in http://localhost:${port}`);