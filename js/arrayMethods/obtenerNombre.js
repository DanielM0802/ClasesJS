document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();

});

function iniciarApp() {

const respuestaAPI = "https://via.placeholder.com/600/61a65";
const respuestaAPI2 = "https://via.placeholder.com/600/f9cee5";

//Obtener nombre de la imagen -> 61a65
// Salida -> const nombre = "61a65";
const splitted = respuestaAPI.split('/');
const ultimaPosicion = splitted.length - 1;
const nombre = splitted[ultimaPosicion]

//Otra solucion
const nombre2 = splitted.slice(-1)[0];

console.log(nombre);














}    
