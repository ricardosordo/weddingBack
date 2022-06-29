const { Schema, model }  = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    pases: {
        type: String,
        required: [true, 'El número de pases es obligatorio' ]
    },
    confirmados: {
        type: String,
        required: [true, 'El número de pases confirmados obligatorio' ]
    } 
})

module.exports = model('Users', UsuarioSchema);