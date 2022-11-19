document.addEventListener('DOMContentLoaded', ()=>{
    iniciarApp();

});

const iniciarApp = () => {

//Validador de correo que verifique que un correo ingresado contenga un arroba '@' y un punto '.'

let limiteCorreo = 0;
const correosAlmacenados = [];

while(limiteCorreo <= 5 ) {
    
    limiteCorreo++;

    const correoIngresado = window.prompt('ingresa tu correo');

    const contieneArroba = correoIngresado.includes('@');
    const contienePunto = correoIngresado.includes('.');


    if ( contieneArroba === true && contienePunto === true  ) {
        console.log('correo valido!');
        correosAlmacenados.push(correoIngresado);
    } else {
        console.log('correo inválido');
    };

    console.log(correosAlmacenados);

}





}