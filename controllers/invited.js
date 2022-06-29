const { response, request } = require('express');

const Usuario = require('../models/users')

const invitedGet = async (req = request, res = response) => {
    try {
    const usuarios = await Usuario.find(); 
    if(usuarios){
        res.json({usuarios});
    }
    } catch (error) {
        res.status(400).json(error);
    }
}

const invitedPut = async (req, res = response) => {

    const { id } = req.params;
    const { body } = req
    try {
    const usuario = await Usuario.findByIdAndUpdate(id, body);
    if(usuario){
        res.json({usuario})
    }
    } catch (error) {
        res.status(400).json(error)
    }
    
}

const invitedPost = async (req, res = response) => {
    const body = req.body
    try {
    const usuario = new Usuario( body );
    if(usuario){
        await usuario.save();
        res.json({usuario});
    }
    } catch (error) {
        res.status(400).json(error)
    }

}


module.exports = {
    invitedGet,
    invitedPost,
    invitedPut
}