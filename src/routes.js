const express = require('express');
const authMiddleware = require('./middlewares/auth')
const app = express();

const routes = express.Router();
app.use(authMiddleware);
const UserController = require('./controllers/UserController');
const MessageController = require('./controllers/MessageController');
const ClassroomController = require('./controllers/ClassroomController');


routes
    //users
    .get('/users',UserController.index)
    .post('/users', UserController.create)
    .put('/users/:id', UserController.update)
    .delete('/users/:id', UserController.delete)
    .post('/users/authenticate', UserController.authenticate)
    //messages
    .get('/messagesclassrooms/:id', MessageController.index)
    .get('/messages/:id', MessageController.show)
    .post('/messages',authMiddleware, MessageController.create)
    .put('/messages/:id',authMiddleware, MessageController.update)
    .delete('/messages/:id',authMiddleware, MessageController.delete)
    
    //classrooms
    .get('/classrooms', ClassroomController.index)

module.exports = routes;