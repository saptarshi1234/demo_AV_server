const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', socket=>{
	console.log('connected');

	socket.on('play',()=>{
		console.log('play')
	});


	socket.on('pause',()=>{
		console.log('pause')
	});

	socket.on('seek',(data)=>{
		console.log(`seeking to ${data.position} at ${data.timestamp}`);
	});



	// socket.emit('play');
	setTimeout(()=>{
		socket.emit('play');
		socket.emit('seek',120);
	},5000);
	socket.on('disconnect',()=>console.log('disconnected'));	
})

var server = http.listen(process.env.PORT || 3000, function() {
  console.log('Listening on port %d.', server.address().port);
});
