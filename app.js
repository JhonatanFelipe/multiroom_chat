/** importar as configurações do servidor */
const { set } = require('./config/server');
var app = require('./config/server');

/** parametrizar a porta de escuta */
var server = app.listen(80, function() {
    console.log('Servidor On')
})

var io = require('socket.io').listen(server);

app.set('io', io);

/** criar a conexão por websocket */
io.on('connection', function(socket) {
    console.log('Usuário conectou');

    socket.on('disconnect', function() {
        console.log('Usuário desconectou')
    })

    socket.on('msgParaServidor', function(data) {
        socket.emit('msgParaCliente', { name: data.name, mensagem: data.mensagem })

        socket.broadcast.emit('msgParaCliente', { name: data.name, mensagem: data.mensagem })
    });
});