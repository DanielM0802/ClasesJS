document.addEventListener('DOMContentLoaded', ()=>{
    iniciarApp();
});

function iniciarApp() {

    //crear funcion que reciba array de numeros y cuente la cantidad de numeros POSITIVOS.

    function contadorPositivos(arrNumber) {
        
        let contador = 0;
        //[2,3,4,-5,-1,4,-8]
        for (let i = 0; i < arrNumber.length; i++) {
            const element = arrNumber[i];
            if ( element > 0) {
                contador = contador + 1;
            }  
        }
        return contador;
    }

    const resultadoFuncion = contadorPositivos([4,-5,-1,7,4,-8]);

    const resultadoFuncion2 = contadorPositivos([5,4,-1,7,4,-8]);

    console.log(resultadoFuncion);
    console.log(resultadoFuncion2);


    //contadorPositivos([2,3,4,-5,-1,7,4,-8]);

}