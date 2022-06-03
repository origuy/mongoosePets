const mongoose = require('mongoose');
const nodemon = require('nodemon');
const schemas = require('./schemas');
let Pet;
let Vet;
let Owner;
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/PetsHomeWork');
  console.log("Connected")
  Pet = new mongoose.model("pet",schemas.petSchema)
  Vet = new mongoose.model("vet",schemas.vetSchema)
  Owner = new mongoose.model("owner",schemas.ownerSchema)
  await printVetPetByOwner ("62983a17cabdff8740fce0e8")
}
async function printVetPetByOwner (ownerID){
    const ownerResult = await Owner.findById(ownerID)
    const petResult = ownerResult.pets
    const vetResult = ownerResult.vet
    console.log(`---------- בעלים ----------`)
    console.log(`${ownerResult.firstName} ${ownerResult.lastName}`)
    console.log(`---------- בעלי חיים ----------`)
    for(let i = 0; i < petResult.length;i++){
        let pet =  await Pet.findById(petResult[i]._id);
        console.log(pet.firstName)
    }
    console.log(`---------- וטרינר ----------`)
    let vet =  await Vet.findById(vetResult._id);
    console.log(`${vet.firstName} ${vet.lastName}`)
    console.log(`${vet.tel}`)
    
    
}