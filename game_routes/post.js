const express = require('express');
//const app = express();
const userController = require('../Controls/userController');


//define a router and create routes
const gameRouter = express.Router();
//create a route for /api/login
gameRouter.post('/api/login', userController.loginCtrl);
//create a route for /api/users
gameRouter.get('/api/users', userController.getUsers);
//create a route with /api/users/id
gameRouter.get('/api/users/:id', userController.getUserByID);

//export router
module.exports = gameRouter;