document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();

});

function iniciarApp() {


    const array1 = [1,2,3];
    const array2 = [4,5,6];

    const resultado = array1.concat(array2);
    const resultadoSpread = [...array1, ...array2];


    console.log(resultado);
    console.log(resultadoSpread);


    
    const palabra = "hola";
    const resultado2 = array1.concat(palabra);
    const resultado2Spread = [...array1, ...palabra];
    console.log(resultado2);
    console.log(resultado2Spread);

    const numero = 10;

    const resultado3 = array1.concat(numero);
    //const resultado3Spread = [...array1, ...numero];
    console.log(resultado3);
    //console.log(resultado3Spread);

    //Copiar array con spread operator

    const rut = '17.342.835-5';
    let copiaRut = rut;

    copiaRut = '4.234.673-K'

    const letras = ['a','b','c'];

    const copiaLetras = [...letras];

    
    letras.push('holaaaa');


    console.log(letras);
    console.log(copiaLetras);





    
    
    







}