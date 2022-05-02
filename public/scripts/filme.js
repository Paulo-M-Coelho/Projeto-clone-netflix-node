let video = document.querySelector('.video');
const btnPause = document.querySelector('.btnPause');
const btnPlay = document.querySelector('.btnPlay-2');
let barraProgress = document.querySelector('progress');
let tempo = document.querySelector('.inicio');
let tempoTotalDaMusica = document.querySelector('.fim');



function start(){
    video.play()
    mudarDisplayBtn()
}
function pausar(){
    video.pause()
    mudarDisplayBtn2()
}   
function menos10segundos(){
    video.currentTime -=10
}
function mais10segundos(){
    video.currentTime +=10
}

// FUNÇÕES DE DISPLAY DOS BOTÕES PLAY E PAUSE
function mudarDisplayBtn(){
    btnPlay.style.display = 'none'
    btnPause.style.display = 'flex'
}
function mudarDisplayBtn2(){
    btnPause.style.display = 'none'
    btnPlay.style.display = 'flex'
}

btnPause.addEventListener('click',()=>{
    video.pause()
})



function atualizarBarra(){
    barraProgress.style.width = Math.floor((video.currentTime / video.duration) * 100) + "%";
    tempo.textContent = segundosParaMinutos(Math.floor(video.currentTime));
    tempoTotalDaMusica.textContent = segundosParaMinutos(Math.floor(video.duration));
}

// ZERA O TIMER DA MUSICA ASSIM Q CARREGA OUTRA FAIXA
video.addEventListener('timeupdate', atualizarBarra);
// FAZ O TEMPO TOTAL DE MUSICA ATUALIZAR ASSIM Q A MUSICA FOR CARREGADA
video.addEventListener('loadeddata', ()=>{
    tempoTotalDaMusica.textContent = segundosParaMinutos(Math.floor(video.duration));  
})


// FUNÇÃO QUE CONVERTE OS SEGUNDOS DA MUSICA PARA MINUTOS
function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10){
        campoSegundos = '0' + campoSegundos
    }
    return campoMinutos + ':' + campoSegundos
}


// mudar o display das divs de player e informações
let informacoes = document.querySelector('.informacoes');
let divPlayer = document.querySelector('.player')

function displayPlay(){
divPlayer.classList.remove('display');
informacoes.style.display = "none";
mudarDisplayBtn()
video.play()
}