

function saveDataToLocalStorage()
{
    let nombre = document.querySelector("#nombre").value;
    let descripcion = document.querySelector("[name=descripcion-regalo]").value;
    console.log(nombre)
    console.log(descripcion)
    let key = "user" + localStorageIndex;

    localStorage.setItem(key, JSON.stringify
                        (
                            {   
                                username:nombre,
                                giftDescrition:descripcion
                            }
                        ));
                        console.log(localStorageIndex)
                        console.log("++")
                        

}
