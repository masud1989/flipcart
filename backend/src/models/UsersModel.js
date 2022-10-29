const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
        {
            name: {type: String},
            address: {type: String},
            mobile: {type: String},
            email: {type: String, unique: true},
            password: {type: String},
            photo: {type: String},
            createdDate: {type: Date, default:Date.now()}
        }, 
        {versionKey: false}
    );

const UsersModel = mongoose.model('users', DataSchema);



module.exports = UsersModel;