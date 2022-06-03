const mongoose = require("mongoose")
const farmerSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,

})
const product = new mongoose.Schema({
    productName: {
        type:String,
        lowercase:true,
        req
    },
    pets:[String],
    price: {
        type:Number,
        min:1,
        max:99,

    },
    brand: {
        type:String,
        minlength:1,
        maxlength:10
    },
    farmer:farmerSchema,
    supplier: mongoose.SchemaTypes.ObjectId
})

module.exports = mongoose.model("product",product)