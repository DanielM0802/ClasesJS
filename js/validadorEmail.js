document.addEventListener('DOMContentLoaded', ()=>{
    iniciarApp();

});

const iniciarApp = () => {

const paises = 'chile;brasil;argentina';
const paisesConvertidos =  paises.split(';');
//console.log(paisesConvertidos);


//Validador de correo que verifique que un correo ingresado contenga un arroba '@' y un punto '.'

const correoIngresado = window.prompt('ingresa tu correo');

const contieneArroba = correoIngresado.includes('@');
const contienePunto = correoIngresado.includes('.');

const correosAlmacenados = [];

if ( contieneArroba === true && contienePunto === true  ) {
    console.log('correo valido!');
    correosAlmacenados.push(correoIngresado);
} else {
    console.log('correo inválido');
};

console.log(correosAlmacenados);










}