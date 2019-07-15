const mongoose = require("mongoose")
const MONGO_URL = process.env.MONGODB_URI
console.log(MONGO_URL)


function connect(){
    mongoose.connect(MONGO_URL, 
        {useNewUrlParser: true},
     function(error){
        if(error){
        console.log("Deu erro.", error)
    }   else{
        console.log("Deu certo! Conectado no mongo!")
    }
    } 
  )
}

module.exports={connect}