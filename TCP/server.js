var server = require('net').createServer(function(socket) {
  console.log('new connection');
  socket.setEncoding('utf8');
  
  socket.write("Hello! you can start typing messages. To exit type 'quit'.\n");

  socket.on('data', function(data) {
    console.log('got:', data.toString())
	if ( data.trim().toLowerCase() === 'quit' ) {
	  socket.write('Bye Bye :)');
	  return socket.end();
    }
	socket.write(data);
  });

  socket.on('end', function() {
    console.log('Client connection ended');
  });
}).listen(5000);	

