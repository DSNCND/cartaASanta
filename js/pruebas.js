function probarValidarNombre() 
{
  console.assert(
      validarNombre('').toLowerCase() === 'este campo debe tener al menos un caracter'.toLowerCase(),
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111').toLowerCase() ===
      'este campo debe tener a lo sumo de 50 caracteres'.toLowerCase(),
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );

  console.assert(
    validarNombre("Edson")==="", "validarNombre fallo al validar un nombre valido"
  )

  console.assert(
      validarNombre("121212") === "Este campo solo acepta letras", "validar nombre fallo al validar que solo se reciban letras"
  )

}

function probarValidarCiudad()
{
    console.assert
    (
        validarCiudad("") === "Elija una ciudad",
        "Validar ciudad no valido la no eleccion de una ciudad"
    );

    console.assert
    (
        validarCiudad("Buenos Aires") === "", 
        "Validar ciudad fallo al validar una ciudad valida"
    )

}

function probarValidarDescripcionRegalo()
{
    let masDe251caracteres = "asdasfsasadsafafasdasfsasadsafafasdasfsasadsafafasdasfsasadsafafasdasfsasadsafafasdasfsasadsafafasdasfsasadsafafasdasfsasadsafafasdasfsasadsafafasdasfsasadsafafasdasfsasadsafafasdasfsasadsafafasdasfsasadsafafasdasfsasadsafafasdasfsasadsafafasdasfsasadsafafasdasfsasadsafafasdasfsasadsafafasdasfsasadsafafasdasfsasadsafafasdasfsasadsafafasdasfsasadsafafasdasfsasadsafafasdasfsasadsafafasdasfsasadsafaf"
    
    console.assert
    (
        validarDescripcionRegalo(masDe251caracteres).toLowerCase() === "El contenido debe ser de menos de 250 caracteres".toLowerCase(),
        "Validar descripcion regalo, valido una descripcion mayor a 250 caracteres"
    )

    console.assert
    (
        validarDescripcionRegalo("") === "El campo descripcion no puede estar vacio",
        "validarDescripcionRegalo valido un campo vacio"
    )

    console.assert
    (
        validarDescripcionRegalo("Des crip cion") === "",
        "validarDescripcionRegalo no valido un campo valido"
    )

    console.assert
    (
        validarDescripcionRegalo(",.,.,.,.-_-@") === "no cumple el criterio, solo acepta numeros y letras",
        "validarDescripcionRegalo no valido que fueran solo numeros y letras"
    )
}

probarValidarCiudad();


probarValidarNombre();


probarValidarDescripcionRegalo();

//escribir pruebas  actividades 5 y 6


