
//server side

//create server
const express = require('express');
const app = express();
var session = require('express-session');
const path = require('path');




//To access the  folder "views"
app.use(express.static('views'));
 
//sending the index html file
app.get('/', function(request, response) {
    response.sendFile('Index.html', { root: __dirname });
});

// middleware     // is used for data management
app.use(express.json());
app.use(express.urlencoded());

//setting up port
const port = process.env.PORT || 3000;
const server = app.listen(port, function() {
    console.log(`Our game listening on port : ${port}`);
});

 

//pass requests to the router middleware
const gameRouter = require('./game_routes/post');
app.use(gameRouter);

//create database if not exists
const createDB = require('./database/db');
createDB();

//loading socket.io and binding to the server
const io = require('socket.io')(server);

//setting up the eventHandler for the "connection" event type
//so we are registering a function to handle this event
io.sockets.on('connection', function(socket) {
console.log('Connection !');
//socket here is the payload received by the server along with the connection event

socket.on('login', function(user) {
//here the payload is the pseudoname, sent by the browser
socket.pseudoname = user.pseudoname;
socket.email = user.email;


io.emit('logged', user);

//for testing
    const request = require('supertest');

    request(app)
        .get('/api/login')
        .query({
            pseudoname: socket.pseudoname,
            contact: user.contact
        })
        .expect(200)
        .end(function(err, res) {
            if (err) throw err;
            else console.log(res);
        });

});

});