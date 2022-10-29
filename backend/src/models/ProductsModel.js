const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
        {
            id: String,
            url: String,
            detailUrl: String,
            title: Object,
            price: Object,
            quantity: Number,
            description: String,
            discount: String,
            tagline: String,           
            createdDate: {type: Date, default:Date.now()}
        }, 
        {versionKey: false}
    );

const ProductsModel = mongoose.model('products', DataSchema);



module.exports = ProductsModel;