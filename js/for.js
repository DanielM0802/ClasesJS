document.addEventListener('DOMContentLoaded', ()=>{
    iniciarApp();

});

const iniciarApp = () => {

    const frutas = ['Manzana', 'Pera', 'Naranja', 'Sandia', 'Uva'];

    for(let i = 0 ; i < frutas.length ; i++ ){
        //console.log(  frutas[i] );
    }


    //Crear un bucle for que permita añadir los numeros del 1 al 10 a un array.
    //Salida esperada: [1,2,3,4,5,6,7,8,9,10]



    const guardarNumero = [];
       
    for (let i = 1; i <= 10 ; i++) {
        guardarNumero.push(i);        
    }
    //console.log(guardarNumero);

    //Crear un bucle for que permita añadir los numeros del -1 al -10 a un array.
    //Salida esperada: [-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]
    const guardarNumeroNegativo = [];
       
    for (let i = -1; i >= -10 ; i--) {
        guardarNumeroNegativo.push(i);        
    }

    console.table(guardarNumeroNegativo);






}