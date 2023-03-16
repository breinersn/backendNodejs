const User = require('../models/user');

module.exports = {
    create(req, res){

        const user = req.body; //captura los datos enviados por el usuario
        User.create(user, (err, data) => {

            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con el registro del usuario',
                    error: err
                });
            }
                return res.status(201).json({
                    success: true,
                    message: 'El registro se lealizo correctamente',
                    data: data
                });
        })
    }
}