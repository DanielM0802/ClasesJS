document.addEventListener('DOMContentLoaded', ()=>{
    iniciarApp();

});

const iniciarApp = () => {

//isNan    
//no es un numero ->  true
//si es un numero correcto -> false




let resultadoIsNan = true; 

do{
    
    //paso 1 -> permitir ingreso de numero
    let ingresaNumero = window.prompt('ingresa un NUMERO');
    
    //paso 2 -> guardar resultado de isNaN
    resultadoIsNan = isNaN(ingresaNumero);


    //paso 3 -> evaluar condicion
    if ( resultadoIsNan === true  ) {
        console.log('No es un numero');
    } else {
        console.log('es un NUMERO');
    }

    
 

}while( resultadoIsNan === true  );










}