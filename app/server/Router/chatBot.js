module.exports = app => { 
    const request = require('../Controllers/chatBot')
    let router = require("express").Router();

    router.post('/',request.ChatBot)

    app.use('/chatbot',router)
}