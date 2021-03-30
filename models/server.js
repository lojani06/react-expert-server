// CREAMOS NUESTRO SOCKET SERVER
const express = require('express');

const http = require('http');//servidor de sockets

const socketio = require('socket.io');//configuracion de socks server

const path = require('path');

//clase personalizada de nuestros sockets
const Sockets = require('./sockets');



class Server{
    constructor(){
        this.app= express();//servidor de express;
        this.port=process.env.PORT;

        //http server
        this.server = http.createServer(this.app);

        // configuraciones socket
        this.io = socketio(this.server,{/*configuraciones */})
    }

    middlewares(){
         //desplegar el directorio publico que  voy ha servir a mis cliente

        this.app.use(express.static(path.resolve(__dirname,'../public')))
    }

    configurarSockets(){
        //instanciomos nuestra clase que tieno nuestros eventos
       new Sockets(this.io);
    }

    execute(){

       

        this.middlewares();
        this.configurarSockets();
        //puerto donde correr el server
        this.server.listen(this.port,()=>{
        console.log('puerto corriendo en el puerto',this.port)
    });


    }

    
}

module.exports = Server;//servidor de express