document.addEventListener('DOMContentLoaded', ()=>{
    iniciarApp();

});

const iniciarApp = () => {


    //const numeros = [1,2,3];

    function duplicarNumeros(arr){

        if(Array.isArray(arr) === false  ){
            alert('Argumento no valido!')
            return [];
        }

        let duplicados=[];

        for (let i = 0; i < arr.length; i++) {
            duplicados.push( arr[i]*2 );
        }

        return duplicados;

    }

    const resultadoFuncion = duplicarNumeros([2,3,4,2,4,5]);
    console.log(resultadoFuncion);




}