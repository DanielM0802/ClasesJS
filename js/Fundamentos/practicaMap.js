document.addEventListener('DOMContentLoaded', ()=>{
    iniciarApp();

});

function iniciarApp() {

    //crear funcion que transforme los elementos de un array de numeros a numeros negativos
    //ej [25,3,4,-3,7]  -> [-25,-3-4,-3,-7]
    function transformarNegativo(numeros){

        let numerosTransformados = []; 

        for (let i = 0; i < numeros.length; i++) {
            //si el numero es positivo lo multiplicamos por -1
            if( numeros[i] < 0){
                numerosTransformados.push(numeros[i]);
            } else {
                numerosTransformados.push(numeros[i]*-1);
            }
        }
        return numerosTransformados;
    }

    let resultadoFuncion = transformarNegativo([-25,-3,-4,-3,-7, -9 , 100,5,3,5,2,21]);
    console.log(resultadoFuncion);

}