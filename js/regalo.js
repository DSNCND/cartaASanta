function regaloAleatorio()
{
    let gift = document.querySelector(".santa-gift-text")
    let key = enteroAleatorio(0,localStorageIndex-1)
    let objetoUsuario = JSON.parse(localStorage.getItem("user"+key))
    let descripcionRegalo = objetoUsuario.giftDescription
    gift.innerText=descripcionRegalo;
};

function imagenDeRegalo()
{
    let gift = document.querySelector(".santa-gift")
    let cantidadRegalos = Object.keys(listaDeImagenes).length;
    let key = enteroAleatorio(1, cantidadRegalos)
    let url = listaDeImagenes[key];

    gift.setAttribute("src",url)

};



function regalo()
{
    imagenDeRegalo()
    regaloAleatorio()
}

document.body.addEventListener(onload,regalo());
