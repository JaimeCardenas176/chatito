const store = require('./store');

function addMessage(user, message) {
    return new Promise( (resolve, reject) => {
        if(!user || !message){
            console.error(`[messageController] there's no user or message`);
            return reject('incorrect data');
        }

        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        };
        store.add(fullMessage);
        return resolve(fullMessage);
    });
}

function getMessages() {
    return new Promise( (resolve, reject) => {
        resolve(store.list());
    })
}

module.exports = {addMessage, getMessages}