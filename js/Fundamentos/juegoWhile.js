document.addEventListener('DOMContentLoaded', ()=>{
    iniciarApp();

});

const iniciarApp = () => {

                     //Math.random() * (max - min) + min    
const numeroAdivinar = Math.floor( Math.random() * (11 - 0 ) + 0 );
console.log(numeroAdivinar);


//el jugador parte con 0 intentos
let intentos = 0;

//bandera que detecta si el jugador ganó
let esGanador = false;



//el jugador tiene un maximo de 3 intentos
while( intentos < 3 ){

    intentos++; 
    console.log('llevas ' + intentos )

    const numeroGuardado = window.prompt('ingresa tu numero');        
    const numeroConvertido = parseInt(numeroGuardado);

    if (numeroAdivinar === numeroConvertido)  {
        console.log('acertaste ' + numeroConvertido);
        esGanador = true;
        break;    
    }

}

if ( esGanador === false ) {
    alert('perdiste el juego');
}

}



