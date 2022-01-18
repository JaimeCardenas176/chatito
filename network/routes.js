const message = require('../components/messages/network');

const routes = function(server) {
    server.use('/messages', message);
}

module.exports = routes;