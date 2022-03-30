document.addEventListener('DOMContentLoaded', ()=>{
    iniciarApp();

});

const iniciarApp = () => {

//crear una funcion que reciba un array de numeros, debe imprimir el primer numero y retornar el ultimo.
    function devolver(numeros=[]){
    
        const isArray = Array.isArray(numeros);

            if( isArray === false ){
                console.log("Argumento no valido")
                return "Error";
            } else {

                console.log(numeros[0]);
                const ultimoElemento = numeros[numeros.length - 1];
                return ultimoElemento;
            }

    }        
    const respuesta1 = devolver("hola");
    const respuesta2 = devolver([7,3,5,3,5,6,7,7,2,2,5,987,4,5,6,365,4736]);
    devolver(20);
    devolver(false);
    
     
    console.log("Ultimo elemento: ", respuesta1)


}