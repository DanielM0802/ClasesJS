document.addEventListener('DOMContentLoaded', ()=>{
    iniciarApp();

});

const iniciarApp = () => {

   
//Programa que permita ingresar una clave HASTA que coincida con la clave registrada

let contrasenaAlmacenada = ''; 
const contrasenaBaseDatos = '123';

do {

    contrasenaAlmacenada = window.prompt('ingresa contraseña correcta');
    //contrasenaAlmacenada = 'hola123'
    if( contrasenaAlmacenada == contrasenaBaseDatos){
        console.log('constraseña correcta')
    }else{
        console.log('contraseñaErronea')
    }


} while ( contrasenaAlmacenada != contrasenaBaseDatos );
 


//10000
//cuanto quieres sacar?
//2000
//el cliente debe tener un saldo disponible y un saldo a retirar
//el cliente no puede sacar mas del dinero disponible

let preguntaFinal;
let saldoTotal = 10000;
let tarjetaBloqueada = false; 
let opcionNoValida = false; 
//deseas otra operacion?
//confirm('deseas otra operacion?');
//si -> volvemos a repetir todo el codigo
//no -> salir del ciclo

//escoge una opcion


do {


    //crear un menu con 2 opciones
    //1. Retirar Dinero
    //2. Bloquear Tarjeta
    alert('Selecciona alguna opcion!');
    console.log('1. Retirar Dinero');
    console.log('2. Bloquear Tarjeta');
    let opcion = window.prompt('ingresa tu opcion');
    
    switch (opcion) {
        
        case '1':
        alert('Vas a retirar dinero');
        break;
     
        case '2':
        tarjetaBloqueada = true;    
        break;
        

        default:
        opcionNoValida = true;    
        alert('La opcion ingresada no existe');
        break;    
    
    }
    
    if(opcionNoValida === true){
        break;
    }

    if(tarjetaBloqueada === true ){
        alert('Su tarjeta ha sido bloqueada');
        break; 
    }



    const retiroDinero = parseInt(window.prompt('retirar suma de dinero'));
  

    //retiroDinero > 0

    if ( retiroDinero > saldoTotal) {
    console.log('no tienes saldo suficiente');
    }  else if( retiroDinero <= 0 ){
    console.log('intenta con un numero mayor a 0');
    } else if (retiroDinero < saldoTotal ){
        saldoTotal = saldoTotal - retiroDinero;
        console.log('dinero retirado'); 
    } else if (retiroDinero === saldoTotal ){
        saldoTotal = saldoTotal - retiroDinero;
        console.log('dinero retirado, cuenta vacía');        
    };

    console.log(saldoTotal);
    preguntaFinal = confirm('Deseas realizar otra operacion?');

} while ( preguntaFinal == true  ); 



}    