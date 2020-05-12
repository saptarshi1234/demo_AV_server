const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.on('connection', socket=>{
	console.log('connected');
	socket.emit('play');
	setTimeout(()=>{
		socket.emit('pause');
		socket.emit('seek',120);
	},3000);
	socket.on('disconnect',()=>console.log('disconnected'));	
})

var server = http.listen(process.env.PORT || 3000, function() {
  console.log('Listening on port %d.', server.address().port);
});
