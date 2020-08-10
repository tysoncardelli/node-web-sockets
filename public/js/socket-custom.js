var socket = io();
    socket.on('connect', function(){
        console.log("Conectado al servidor")
    })

    socket.on('disconnect', function(){
        console.log("Perdida conexion con el servidor")
    })

    //Enviar informacion
    socket.emit('enviarMensaje',{
        usuario: 'Tyson',
        mensaje: 'Hola mundo'
    }, function(resp){
        console.log("Se disparo el callback",resp);

    });

    //Escuchar informacion

    socket.on('enviarMensaje',function(resp){
        console.log("Servidor:",resp)
    })
