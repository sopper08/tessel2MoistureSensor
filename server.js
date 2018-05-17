const express = require('express');
const app = express();

server = app.listen(3000, function () {
    console.log('Server is listening on port 3000.')
});
const io = require('socket.io').listen(server);

app.get('/', function (req, res) {
    console.log("connetion!")
});

app.get('/test', function (req, res) {
    var username = req.query.username;
    console.log(username);
});
