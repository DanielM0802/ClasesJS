document.addEventListener('DOMContentLoaded', ()=>{
    iniciarApp();

});

function iniciarApp() {

    //Crear funcion que va recibir un array de numeros y los va a invertir

    const array = ["hola","chao","perro"];
    //length = 7
    //ultima_posicion = 6


    function revertirArray(arr){
        
        let numeroRevertido = [];
        
        for (let i = arr.length - 1 ; i > -1 ; i--) {
            numeroRevertido.push( arr[i]  )
        }
    
        return numeroRevertido;

    }

    let resultadoFuncion = revertirArray(array);
    console.log(resultadoFuncion);


}