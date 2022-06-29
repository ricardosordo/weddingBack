const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../dataBase/config');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/invited'

        //DataBase connection
        this.connectDB();

        //middlewares
        this.middlewares();
        // App routes
        this.routes();

    }

    async connectDB(){
        await dbConnection()
    }

    middlewares(){
        //Cors
        this.app.use( cors() );

        //read and parsing
        this.app.use( express.json() );
    }
    
    routes(){     // respond with "hello world" when a GET request is made to the homepage
        this.app.use(this.usuariosPath, require('../routes/invited'))
    }

    listen (){     // respond with "hello world" when a GET request is made to the homepage
        this.app.listen(process.env.PORT, () => {
            console.log('servidor corriendo en el puerto', process.env.PORT)
        })
        }

}

module.exports = Server