const success = (req, resp, message, status) => {
    resp.status( status || 200).send({
        error: '',
        body: message
    });
};

const error = (req, resp, message, status) => {
    resp.status( status || 500).send({
        error: message,
        body: ''
    });
};

module.exports = {success, error};