const UsersModel = require('../models/UsersModel');

// User Registration Method
exports.AdminRegister = (req, res) => {
    let ReqBody = req.body;
    UsersModel.create(ReqBody, (error, data) => {
        if(error){
            res.status(200).json({status: 'fail', data: error})
        }
        else{
            res.status(200).json({status: 'success', data: data})
        }
    })
}