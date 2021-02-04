
function mostrarDeseos()
{
    let listaDeDeseos = document.querySelector(".wish-list");
    let keys = Object.keys(localStorage)

    keys.forEach
    (
        (k)=>
        {
            let deseo = JSON.parse(localStorage.getItem(k));
            let li = document.createElement("li");
            li.style.listStyleType="none"
            li.innerText=deseo.username+" desea ";
            li.innerText+=deseo.giftDescription;
            
            listaDeDeseos.append(li);
        }

    );


}

// `onload="displayWishes()"` en el body
mostrarDeseos()