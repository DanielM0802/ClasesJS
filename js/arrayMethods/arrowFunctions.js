document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();

});

function iniciarApp() {




    sumar(2,3);

    function sumar(a,b){
        console.log('sumando... function declaration');
        return a + b;
    }



    const sumar2 = function sumar(a,b){
        console.log('sumando... function expression');
        return a + b;
    }
    sumar2(2,3);



    const sumar3 = (a,b) => {
        console.log('sumando... arrow function');
        return a + b;
    }

    sumar3(2,3);


    const sumar4 = (a,b) => a + b;

    const resutado = sumar4(2,3);
    console.log('resultado: ' + resutado);



    const meses = ['Enero','Febrero','Marzo','Abril', 'Mayo', 'Junio'];

    meses.forEach( function(mes){

        console.log(mes);
    
    } );

    console.log('-------------------')

    //const mostrarMeses = mes => console.log(mes);

    meses.forEach( mes => console.log(mes) );


    console.log('-------------------')


    const retorno =  meses.forEach( (mes, posicion) =>  console.log(`mes: ${mes}, posicion: ${posicion}`)  );

    console.log(retorno);



















  










}
