var io = require('socket.io')(server);
var roomName;
io.on('connection', function (socket) {
console.log('connect');
var instanceId = socket.id;
socket.on('joinRoom',function (data) {
console.log(data);
socket.join(data.roomName);
roomName = data.roomName;
});
socket.on('reqMsg', function (data) {
console.log(data);
io.sockets.in(roomName).emit('recMsg', {comment: Id + " : " + data.comment+'\n'});
})
});