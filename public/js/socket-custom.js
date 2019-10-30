
    var socket = io();
    //Escuchar
    socket.on('connect', function(){
        console.log('Conectado al servidor');
    });

    socket.on('disconnect', function(){
        console.log('Perdimos conexion con el servidor');
    });

    //Enviar informacion
    socket.emit('enviarMensaje', {
        usuario: 'Cecilia',
        mensaje:'Hola Mundo'
    }, function(resp){
        console.log('Respuesta Servidor', resp);
    });

    //Escuchar informacin
    socket.on('enviarMensaje', function(mensaje){
        console.log(mensaje);
    });