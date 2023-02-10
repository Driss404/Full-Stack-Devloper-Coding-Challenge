const express = require('express'); //framework to connet front-end to the SERVER (middle ware beetwen Nodejs and ExpressJS)
const cors = require('cors'); //the service to talk from the front-end to the back-end from our local machine

const API_PORT = process.env.PORT || 5000; //defining the PORT, 
//after defining the port, we should add our "proxy" in the package.json to be firing on this specied PORT
const  app = express(); //the command to start the server

app.use(cors()); //allowing us to connect our front-end to the back-end

app.get('/api01', function(req, res){
    console.log('Called fetch');
    res.send({result: "req.body.name"}) // API Respons
})// front-end call to the back-end

app.get('/api02', function(req, res){
    console.log('Called quite');
    res.send({result: "Good bye!"}) //this is the respond that gonna be send to the front-end, it's better to send an OBJECT because it's much easier to decode in the front-end
})// the call that we are going to use to call from the front-end to the back-end and get a respones from our server



app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`)) //the port that our framwork will be running throw 