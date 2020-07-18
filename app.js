var app=require('express')();
var http=require('http').createServer(app);
var io = require('socket.io')(http);

var SerialPort = require('serialport');

app.set("view engine","ejs");


//upcoming data dibvers


var SerialPort = require('serialport');
var Readline = SerialPort.parsers.Readline;
var port = new SerialPort('COM8');
var parser = new Readline();
port.pipe(parser);
parser.on('data', (temp) => { //Read data
    console.log(temp);
var today=new Date();
    io.sockets.emit('temp', {date: Date.now(), time: (today.getHours())+":"+(today.getMinutes()), temp:temp}); //emit the datd i.e. {date, time, temp} to all the connected clients.
});

io.on('connection', (socket) => {
    console.log("Someone connected."); //show a log as a new client connects.
})

app.get("/",function(req,res){
    res.render("index")     

});


http.listen(3000,function(){
    console.log("Server is live ");
});