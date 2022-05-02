const mongoose = require('mongoose');

const userDbConnect = ()=>{
    mongoose.connect(process.env.DB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{console.log("Banco de dados dos usuarios Conectado")}).catch((error)=>{
        console.log(error)
    })
}

module.exports = userDbConnect