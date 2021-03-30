class Sockets{
    constructor(io){
        this.io=io;
        this.SocketEvents();
    }

    SocketEvents(){


        this.io.on('connection', (socket) => { 

            // cliente conectado
            // console.log('cliente conectado!')

            //eventos que emite el servidor  
            // servidor enviando mensaje al cliente
            // socket.emit('mensaje-bienvenida',{
            //     'msg':'Bienvenido al server',
            //     'fecha': new Date()
            // });


            // escuchar el evento emitido por el cliente
            socket.on('mensaje-cliente',(data)=>{
                console.log(data);

               this.io.emit('respuesta-server',data)
            })
        });
    }
}

module.exports = Sockets;