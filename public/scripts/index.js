


let containerInterno = document.querySelector('.container-interno')

//let numDeItens = containerInterno.


let numDeItens = 6

function avançar(indice, lista){
      numDeItens = numDeItens + indice

      let containerInterno = document.querySelector('.container-interno'+lista)
      console.log(containerInterno);

      let mover = 150;
      let direita = mover;
      let esquerda = -mover;

      if(indice == +1){
          containerInterno.scrollBy({top:0,left:direita,behavior: 'smooth'})
      }
      if(indice ==-1){
          containerInterno.scrollBy({top:0,left:esquerda,behavior: 'smooth'})
      }
    
}
 












