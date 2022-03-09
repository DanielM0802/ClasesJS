document.addEventListener('DOMContentLoaded', ()=>{
    iniciarApp();

});

const iniciarApp = () => {

    //Crear programa que reciba un numero e imprima la tabla de multiplicar hasta 10 de ese numero
    /*
    3 x 1 = 3
    3 x 2 = 6
    3 x 3 = 9
    3 x 4 = 12
    3 x 5 = 15
    */
    let numeroIngresado = window.prompt('ingresa numero');   
    let numeroTransformado = parseInt(numeroIngresado);
    

    for (let i = 1; i <= 10; i++) {
        
        console.log(`${numeroIngresado} x ${i} = ${i * numeroTransformado}`);

    }



    
} 





















