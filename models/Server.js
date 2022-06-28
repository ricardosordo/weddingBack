const express = require('express');
const cors = require('cors')

class server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        // App routes
        this.routes();

    }

    middlewares(){
        this.app.use( cors() );
    }
    
    routes(){     // respond with "hello world" when a GET request is made to the homepage
    this.app.get('/api', (req, res) => {
        res.json({
            ok:true,
            msg: 'get sucess'
            });
        });
    }

    listen (){     // respond with "hello world" when a GET request is made to the homepage
        this.app.listen(process.env.PORT, () => {
            console.log('servidor corriendo en el puerto', process.env.PORT)
        })
        }

}

module.exports = server