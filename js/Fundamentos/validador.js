document.addEventListener('DOMContentLoaded', ()=>{
    iniciarApp();

});

const iniciarApp = () => {




const numero1 = window.prompt('Ingresa el numero'); 

const numero2 = window.prompt('Ingresa el numero 2');


const numero1convertido = parseInt(numero1);
const numero2convertido = parseInt(numero2);


if ( numero1convertido < numero2convertido){
    console.log('numero mayor es el 2: '+ numero2convertido);
} else if (numero1convertido > numero2convertido){
    console.log('numero mayor es 1: ' + numero1convertido);
} else if (numero1convertido === numero2convertido){
    console.log( 'son iguales');
} else {
    console.log('eso no es un numero');
}


    




}