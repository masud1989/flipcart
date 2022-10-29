// Product Insert Method
exports.InsertProduct = (req, res) => {
    let ReqBody = req.body;
    ProductsModel.create(ReqBody, (error, data) => {
        if(error){
            res.status(200).json({status: 'fail', data: error})
        }
        else{
            res.status(200).json({status: 'success', data: data})
        }
    })
}