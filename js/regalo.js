function regaloAleatorio()
{
    let gift = document.querySelector(".santa-gift-text")
    let key = enteroAleatorio(0,localStorageIndex-1)
    let objetoUsuario = JSON.parse(localStorage.getItem("user"+key))
    let descripcionRegalo = objetoUsuario.giftDescription
    gift.innerText=descripcionRegalo;
}

regaloAleatorio()