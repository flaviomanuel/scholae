const express = require('express');

const routes = express.Router();

const UserController = require('./controllers/UserController');
const MessageController = require('./controllers/MessageController');
const ClassroomController = require('./controllers/ClassroomController');


routes
    //users
    .get('/users', UserController.index)
    .post('/users', UserController.create)
    .put('/users/:id', UserController.update)
    .delete('/users/:id', UserController.delete)
    //messages
    .get('/messages', MessageController.index)
    .get('/messages/:id', MessageController.show)
    .post('/messages', MessageController.create)
    .put('/messages/:id', MessageController.update)
    .delete('/messages/:id', MessageController.delete) 
    //classrooms
    .get('/classrooms', ClassroomController.index)

module.exports = routes;