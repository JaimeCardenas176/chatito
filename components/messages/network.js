const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', (req, resp) => {
    controller.getMessages()
    .then( (messageList) => {
        response.success(req, resp, messageList, 200);
    })
    .catch((err) => {
        response.error(req, resp, err, 500);
    })
})

router.post('/', (req, resp) => {
    controller.addMessage(req.body.user, req.body.message)
    .then((fullResponse)=>{
        response.success(req, resp, fullResponse, 200);
    })
    .catch( (err) => {
        response.error(req, resp, 'Simulating error', 400)
    });
})

module.exports = router;