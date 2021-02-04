
const listaDeImagenes = 
{
    1:"img/gifts/goldGift.jpg",
    2:"img/gifts/groupGift.jpeg",
    3:"img/gifts/redGift.jpg",
}


const comportamientos = 
{
    1:"MUY BUENO",
    2:"BUENO",
    3:"MASO"
} 

function comportamiento()
{
    let comportamiento = document.querySelector(".attitude")
    comportamiento.innerText=comportamientoAleatorio();
}

function comportamientoAleatorio()
{
    let comportamiento = comportamientos[aleatorio()];
    return comportamiento;
}

function aleatorio()
{
   return enteroAleatorio(1,3)
}

function enteroAleatorio(min, max)
{

return Math.floor(Math.random() * (max-min+1)+min);

}

//si uso directamente comportamiento() ejecuta la funcion ni biene lee el archivo resultado.js
document.body.addEventListener(onload,comportamiento()); //onload espera el evento de carga de la pagina
/*
//After creating the function, lets check if this works correctly by calling 
  the function in the `<body>` section of `result.html` page using the `onLoad` 
  event.
  */

  
