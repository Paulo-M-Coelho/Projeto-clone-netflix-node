//instalar o method-override para poder apagar um dado atravez de um formulario (npm install method-override)
//instalar o nodemon para o server recarregar sempre q algum arquivo for midificado
require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3333;
const connectDb = require('./database/db');

const videosRoute = require('./routes/videosRoute');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));

connectDb();



const userRoute = require('./routes/userRouter');
const userDbConnect = require('./database/userDb');
const cookieParser = require('cookie-parser')


app.use('/',cookieParser(),
express.json(),
express.urlencoded({extended:true}), videosRoute);
app.use('/user',express.urlencoded({extended:true}),userRoute);

userDbConnect();








app.listen(PORT, ()=> console.log('app rodando na porta', PORT))