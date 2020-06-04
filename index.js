const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// setInterval(()=>{
// 	console.log('play');
// 	console.log('seek',120);
// 	setTimeout(()=>{
// 		console.log('pause')
// 	},5000)
// },5000);

io.on('connection', socket=>{
	console.log('connected');

	socket.on('play',(data)=>{
		console.log('play')
	});


	socket.on('pause',(data)=>{
		console.log('pause')
	});

	socket.on('seek',(data)=>{
		console.log(`seeking to ${data.position} at ${data.last_updated}`);
	});

	setTimeout(()=>{
		socket.emit('seek',120);
		setTimeout(()=>{
			socket.emit('pause')
		},5000)
	},10000);
	
	socket.on('disconnect',()=>console.log('disconnected'));	
})

var server = http.listen(process.env.PORT || 3000, function() {
  console.log('Listening on port %d.', server.address().port);
});
