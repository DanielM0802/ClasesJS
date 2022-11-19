document.addEventListener('DOMContentLoaded', ()=>{
    iniciarApp();

});

const iniciarApp = () => {


    function saludar( nombre ){
        console.log(`Hola ${nombre}`);
        return 0;
    }

    //Sumar 3 numeros que vienen desde el prompt
    let resultadoIsNan = true; 
    let transformarNumero1;

    do { 
        
        const numero1 = window.prompt('ingresa numero 1');
        transformarNumero1 = parseInt(numero1);
        resultadoIsNan = isNaN(numero1);
    
    } while ( resultadoIsNan == true);



    let transformarNumero2;
    do {
    
        const numero2 = window.prompt('ingresa numero 2');
        transformarNumero2 = parseInt(numero2);
        resultadoIsNan = isNaN(numero2);

    }while (resultadoIsNan == true);



    let transformarNumero3;
    do {
    
        const numero3 = window.prompt('ingresa numero 2');
        transformarNumero3 = parseInt(numero3);
        resultadoIsNan = isNaN(numero3);

    }while (resultadoIsNan == true);



    let sumar = transformarNumero1 + transformarNumero2 + transformarNumero3;

    console.log(sumar);






    




}