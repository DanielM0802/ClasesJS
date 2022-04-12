document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();

});

function iniciarApp() {


    //indexOf

    const nombre = 'Daniel';


    const nombres = ['pedro', 'juan', 'diego'];
    const resultado = nombres.indexOf('pedro');

    console.log(resultado);

    //lastIndexOf
    const nombres2 = ['pedro', 'juan', 'diego','pedro'];
    const resultado2 = nombres2.lastIndexOf('pedro');
    console.log(resultado2);

    //fill
    const frutas = ['🍓','🍑','🍒','🍐','🍍'];
    const frutasModificada = frutas.fill('🍕', 1,2);

    console.log(frutasModificada);

    //reverse
    const objetos = ['🎨','🎄','🍒'];
    objetos.reverse();
    console.log(objetos);

    //flat
    const array2 = ['🎨','🎄','🍒',['🍓','🍐','🍍',['🥽']] ];
    let flatten = array2.flat(0);

    console.log(flatten);
 











}

