const mongoose = require('mongoose');

const connectDb = ()=>{
    mongoose.connect(process.env.DB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=> console.log("Banco conectado")).catch((error)=> console.log(error))
}

module.exports = connectDb;