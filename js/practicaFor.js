document.addEventListener('DOMContentLoaded', ()=>{
    iniciarApp();

});

const iniciarApp = () => {

//hola -> ['h', 'o', 'l', 'a'] -> hola

let palabra = 'hola';

let palabraSeparada = palabra.split('');

// ['h', 'o', 'l', 'a']
//console.log(palabraSeparada)

let palabraUnida = '';

for (let i = 0; i < palabraSeparada.length; i++) {
    palabraUnida += palabraSeparada[i];
}

//uniendo array con metodo
const unida = palabraSeparada.join(''); 


console.log(palabraUnida);
console.log(unida);


    
}   



