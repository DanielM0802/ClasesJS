document.addEventListener('DOMContentLoaded', ()=>{
    iniciarApp();

});

function iniciarApp() {


//Funcion que reciba un array de numeros y filtre todos los mayores a 10, debe retornar un array con los numeros que cumplan la condicion.


function filtrar(arr) {
    
    const mayorAdiez = [];

    for(let i = 0; i < arr.length; i++ ) {

        if(arr[i] > 10){
            mayorAdiez.push(arr[i]);
        } 
        
    }

   return mayorAdiez;

}
const numeros = [2,3,4,12,67,-2,-10,-68,19];

const resultadoFuncion = filtrar(numeros);
console.log(resultadoFuncion); 








}