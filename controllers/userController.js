const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const pageRegister = (req,res)=>{
    res.render('register')
};
const pageLogin = (req,res)=>{
    res.render('login')
}


const register = async(req, res)=>{
    //verificando se estão tentando cadastrar um email q ja foi cadastrado antes
    const selectedUser = await User.findOne({email:req.body.email});
    if(selectedUser) return res.status(400).send('Email já existe') // tratar depois esse return

const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password)
})
try{
    const savedUser = await user.save()
    res.redirect('/user/login')
}catch(error){
    res.status(400).send(error)
}
    console.log("register")
}   


const login = async (req,res)=>{
    
    const selectedUser = await User.findOne({email: req.body.email});
    if(!selectedUser) return res.redirect('/user/login')
    const passwordAndUserMatch = bcrypt.compareSync(req.body.password, selectedUser.password)//comparando a senha q vem do body com a do banco de dados
    if(!passwordAndUserMatch){   
         return res.redirect('/user/login') 
    };

    const token = jwt.sign({_id: selectedUser._id, admin: selectedUser.admin}, process.env.TOKEN_SECRET, );

    res.cookie('authorizationToken', token,{
        secure: true,
        httpOnly: true,       
    }).redirect('/')
    console.log("login")
    //res.send("user loged")
    //res.redirect("/filmes")
}

const logout = async (req,res)=>{
    try{  
       res.clearCookie('authorizationToken')//função q limpa o cookie onde esta armazenado o token
        return res.status(200).redirect('/user/login')
    }catch(error){
        return res.status(500).send(error.message)
    }
}


module.exports = {register, login, pageRegister, pageLogin, logout}