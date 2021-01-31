const $form = document.querySelector("#carta-a-santa");

$form.onsubmit = validarFormulario;


function validarFormulario(event)
{
//const $form = document.querySelector("#carta-a-santa")

const nombre = $form.nombre.value
const ciudad = $form.ciudad.value
//const comportamiento = $form.comportamiento.value //no lo usamos, es un radio button

//const descripcionRegalo = $form.descripcion-regalo.value 
//no funciona el guion desvirtua lo que se busca, js interpreta $form.descripcion - regalo
//entonces usamos la notacion de acceso por clave al atributo
const descripcionRegalo = $form['descripcion-regalo'].value

const errorNombre = validarNombre(nombre);
const errorCiudad = validarCiudad(ciudad);
const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo)

const errores = 
{
    nombre : errorNombre,
    ciudad : errorCiudad,
    "descripcion-regalo" : errorDescripcionRegalo
};

const esExito = manejarErrores(errores) === 0;
if(esExito)
{
    $form.classList.add("oculto")
    document.querySelector("#exito").classList.remove("oculto");
}


event.preventDefault();

}



function manejarErrores(errores)
{
    const keys = Object.keys(errores);
    const $errores = document.querySelector("#errores");
    let cantidadErrores=0;
    $errores.innerHTML = "";
    keys.forEach
    (
        function(k)
        {
            const error = errores[k];
            
            if(error)
            {
                cantidadErrores++;
                $form[k].classList.add("error");
                //$form[k].className="error";
                const $error = document.createElement("li");
                $error.listStyleType="none"
                $error.innerText = error;
                $errores.appendChild($error);
            }
            else
            { 
                $form[k].classList.remove("error");
                //$form[k].className="";
            }
        }
    );

    //ctrl+k+c // // // // errorNombre = errores.nombre // nombre
    // // // // // errorCiudad = errores.ciudad // ciudad
    // // // // // errorDescripcionRegalo = errores.descripcionRegalo //descripcionRegalo

    // // // // // if(errorNombre)
    // // // // // {
    // // // // //     $form.nombre.className="error";
    // // // // // }else
    // // // // // {
    // // // // //     $form.nombre.className="";
    // // // // // }

    // // // // // if(errorCiudad)
    // // // // // {
    // // // // //     $form.ciudad.className="error";
    // // // // // }
    // // // // // else
    // // // // // {
    // // // // //     $form.ciudad.className="";
    // // // // // }

    // // // // // if(errorDescripcionRegalo)
    // // // // // {
    // // // // //     $form["descripcion-regalo"].className="error";
    // // // // // }
    // // // // // else
    // // // // // {
    // // // // //     $form["descripcion-regalo"].className="";
    // // // // // }
    return cantidadErrores;
}


function validarNombre(nombre)
{
    if(nombre.length===0)
    {
        return "Este campo debe tener al menos un caracter"
    }
    if(nombre.length>=50)
    {
        return "Este campo debe tener a lo sumo de 50 caracteres"
    }
    if(!/^[a-z]+$/i.test(nombre))
    {
        return "Este campo solo acepta letras"
    }


    return ""
}

function validarCiudad(ciudad)
{
    if(ciudad==="")
    {
        return "Elija una ciudad"
    }
    
    return ""

}

function validarDescripcionRegalo(descripcionRegalo)
{
    if(descripcionRegalo.length>250)
    {
        return "El contenido debe ser de menos de 250 caracteres"
    }
    if(descripcionRegalo.length===0)
    {
        return "El campo descripcion no puede estar vacio"
    }
    if (!/^[a-z \r\n0-9]+$/i.test(descripcionRegalo))
    {
        return "no cumple el criterio, solo acepta numeros y letras"
    }
    return ""
}


