//server side

//create server
const express = require('express');
const app = express();

//allowing static file send from folder "views"
app.use(express.static('views'));
 
//sending the index html file
app.get('/', function(request, response) {
    response.sendFile('Index.html', { root: __dirname });
});

//setting up port
const port = process.env.PORT || 3000;
const server = app.listen(port, function() {
    console.log(`Our game listening on port : ${port}`);
});

//loading socket.io and binding to the server
const io = require('socket.io')(server);

 