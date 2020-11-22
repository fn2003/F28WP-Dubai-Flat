const { User } = require('../models/entities');
const userDAO = require('../database/userDAO');
const { request, response } = require('express');
const { use } = require('../game_routes/post');


const loginCtrl = (request, response, next) => {
    const loginServices = require('../resources/userServices');



    let pseudoname = request.body.auser.pseudoname;

    loginServices.loginService(pseudoname, email, function(err, oldy, user) {
        console.log("User from login service :" + JSON.stringify(user));
        if (user === null) {
            console.log("Auhtentication problem!");
            response.json(null);
        } else {
            console.log("Auhtentication went through!");
            if (oldy === true) {
                console.log(`Hello ${pseudoname}, welcome back!`);
            } else {
                console.log(`Hello ${pseudoname}, you have been registred!`);
                console.log(`Your id is ${user.id}!`);
            }
            response.json({ old: oldy, obj: user });
        }
        response.end();
        next();
    });
};

const userCreate = (request,response) => {
    const DAO = require('../database/userDAO');

    let name = request.body.pseudoname;
    let id = request.body.id;
    DAO.createUser(name,id,function(err,user){
        if(!err){
            console.log("User created"+ JSON.stringify(user));
        }
        else {
            console.log("No user created")
        }
    
    });


}

const addScore = (request,response) => {
    const DAO = require('../database/userDAO');

    let id = request.body.id;
    let score = request.body.score;
    DAO.insertScore(id,score,function(err,user){
        
    });
}

const newInfo = (request,response) => {
    const DAO = require('../database/userDAO');

    DAO.getInfo(function(err,user){
        response.json(user);
        response.end();
    });
}

const getUsers = (request, response) => {
    const loginServices = require('../resources/userServices');
    loginServices.searchService(function(err, rows) {
        response.json(rows);    
        response.end();
    });
};

const getUserByID = (request, response) => {
    const loginServices = require('../resources/userServices');
    let id = request.params.id;
    loginServices.searchIDService(id, function(err, rows) {
        response.json(rows);
        response.end();
    });
};

module.exports = {
    loginCtrl,
    getUsers,
    userCreate,
    getUserByID
};