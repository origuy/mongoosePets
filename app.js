const mongoose = require("mongoose");
const product = require("./product");
const nodemon = require("nodemon")

try {
    mongoose.connect("mongodb://127.0.0.1:27017/hackerUStudents");
    //  createProduct()
    //  updateProcuct({price:50})
    // deleteProcuct("6294f808c3b3dd8383dd0295")
    // findProcuct()
    findUsingQuery()
    console.log("Connected")
} catch (error) {
    console.log(error);
}

async function createProduct() {
    const newProduct = new product({
        productName:"book1",
        price:20,
        farmer:{
            firstName:"Ori",
            lastName:"Guy"
        }
    })
    await newProduct.save();
    console.log(newProduct);
}

async function updateProcuct(findObjectById) {
    // const productToChange = await product.findById(findObjectById);
    const productToChange = await product.find(findObjectById);
    // console.log(productToChange)
    productToChange.forEach(async element => {
        // let result = await product.findById(element.id)
        // result.price = 10
        // await element.save();
        element.price = 10
        element.save();

    })
    // console.log(productToChange)
}
async function deleteProcuct(findObjectById) {
    const productToDelete = await product.findById(findObjectById);
    productToDelete.deleteOne()
}
async function findProcuct() {
    const products = await product.find();
    console.log(products)
}
async function findUsingQuery() {
    const productToFind = await product.where("productName").equals('book1').limit(2).select("price");
    console.log(productToFind)
}