const mongoose = require("mongoose");
 const petSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    favFood:String,
    age:{
        type:Number,
        min:1,
        max:30
    }
})
 const vetSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    tel:Number
})
 const ownerSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        lowercase:true
    },
    age:{
        type:Number,
        min:1,
        max:99
    },
    vet:mongoose.ObjectId,
    pets: [mongoose.ObjectId]

})
exports.petSchema = petSchema
exports.vetSchema = vetSchema
exports.ownerSchema = ownerSchema
