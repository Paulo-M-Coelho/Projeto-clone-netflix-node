




//let numDeItens = containerInterno.




function avançar(indice, lista){
      

      let containerInterno = document.querySelector('.lista'+lista)
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
 












