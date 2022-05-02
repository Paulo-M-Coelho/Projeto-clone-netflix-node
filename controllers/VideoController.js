const Video = require('../models/Video');


// metodo para encontar e mostar todos os arquivos
const allVideos = async (req,res)=>{
    const bibliotecaVideos = await Video.find();

    res.render('filmes', {
        filmes: bibliotecaVideos})
};

// lista todos os filmes em uma tela como string
const lista = async (req,res)=>{
    if(req.user.admin){
    try{
        
            let docs = await Video.find({});
        res.render('lista', {filmes:docs})
        
        
    }catch (error){
        res,send(error)
    }
}
else{
    res.status(400).send('não é admin');
}
}

//carega os dados do arquivo para possivel edição
const loadVideo = async (req,res)=>{
    let id = req.params.id;

    try{
        if(req.user.admin){
            let dadosVideo = await Video.findById(id)

        res.render('edit',{error:false, body: dadosVideo})
        }
        else{
            res.status(400).send('não é admin');
        }
        
    }catch(error){
        res.status(404).send(error)
    }
}
// metodo para atualizar o arquivo do filme
const editVideo = async (req,res)=>{
    let video = {};
    video.name = req.body.name;
    video.category = req.body.category;
    video.description = req.body.description;
    video.urlImage = req.body.urlImage;
    video.urlVideo = req.body.urlVideo;

    let id = req.params.id;
    if(req.user.admin){
    if(!id){
        id = req.body.id
    };
    try{
        let dadosVideo = await Video.findByIdAndUpdate(id, video)
        res.redirect('/')
    }catch(error){
        res.render('edit', {error, body: req.body})
    }}
    else{
        res.status(400).send('não é admin');
    }
}
// Metodo que busca o filme pelo id e direciona para a tela individual
const listOne = async (req,res)=>{
    
    
        let id = req.params.id
    if(!id){
        id = req.body.id
    }
    const filme = await Video.findById(id);
    
    res.render('filme',{
        filme: filme,
       // urlVideo: filme.urlVideo,
        //name: `${filme.name}`
    })
    
   
    
}

// metodo da rota admin
const addVideo = (req,res)=>{
    
    
    if(req.user.admin){
        res.render('admin')
    }
    else{
        res.status(400).send('não é admin');
    }
    
};

// metodo que cria e salva o arquivo(filme)
const createVideo = async (req,res)=>{
   
    if(req.user.admin){
    const video = req.body;
    await Video.create(video);
    res.redirect('/')
    }else{
        res.status(400).send('não é admin');
    }
}

const search = async (req,res)=>{

    const valor = `${req.query.search}`;
    const filmes = await Video.find({
        
            name:{$regex: valor, $options:'i'}   
    }).limit(5)
console.log(filmes)
    res.render('search',{
        filmes: filmes
    })
}

const deleteFilme = async (req,res)=>{
    let id = req.params.id;
    if(req.user.admin){
    if(!id){
        id = req.body.id
    }
    try{
        await Video.findByIdAndDelete(id);
        res.redirect('lista')
    }catch{
        res.status(404).send(error)
    }}
    else{
        res.status(400).send('não é admin');
    }
}

module.exports = {allVideos,lista, addVideo, createVideo, listOne, loadVideo,editVideo, search, deleteFilme}