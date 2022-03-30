document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();

});

function iniciarApp() {


    //crear funcion que reciba un array de numeros y filtre los numeros pares

    // %
    // 7 / 2 
    // 2 * 3 = 6
    //Modulo 7 - 6 = 1 

    // 8/4 = 2
    // 2 x 4 = 8
    //Modulo 8 - 8 = 0

    // 0   2  4  6
    // :2 :2 :2 :2
    // 0  0  0  0

    function filtrarPares(arr) {

        const paresFiltrados = [];

        for (let i = 0; i < arr.length; i++) {

            if (arr[i] % 2 == 0 ) {
                paresFiltrados.push(arr[i]);
            }


        }

        console.log(arr);
        return paresFiltrados;

    }


    const numeros = [7,3,9,19];


    const resultadoFuncion = filtrarPares(numeros);
    console.log(resultadoFuncion);




}