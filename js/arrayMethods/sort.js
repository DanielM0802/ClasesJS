document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();

});

function iniciarApp() {



    const array = ['z','a','h','j','t','y','b','p'];
    const ascArray = array.sort();
    const desArray = [...ascArray].reverse();


    console.log(ascArray);
    console.log(desArray);

    const paises = ['Belgica            ','Australia','China','Francia','Brasil','Chile','Nueva Zelanda']

    //Ordenar paises alfabeticamente de forma ascendente
    //const copiaPaises = [...paises];

    const paisAscendente = [...paises].sort();
    
    console.log(paisAscendente);
    console.log(paises);

    //Ordenar paises por longitud de su nombre

    const paisTamanoAsc =  [...paises].sort( 

        (paisA, paisB) => paisA.trim().length - paisB.trim().length 
    );

    console.log(paisTamanoAsc);


    const numerosDesordenados =  [2,1,7,8,-10,932,3,20,283,37,123,0,5];

    const numerosOrdenadosAsc = [...numerosDesordenados].sort(
        (n1, n2) => n1 - n2
    );

    const numerosOrdenadosDsc = [...numerosDesordenados].sort(
        (n1, n2) => n2 - n1
    );



    console.log(numerosOrdenadosAsc);
    console.log(numerosOrdenadosDsc);


    //Devolver numero menor y numero mayor del array numerosOrdenadosAsc 
    const menor = numerosOrdenadosAsc[0];
    const mayor = numerosOrdenadosAsc[ numerosOrdenadosAsc.length - 1];
    
    console.log(menor);
    console.log(mayor);














}

