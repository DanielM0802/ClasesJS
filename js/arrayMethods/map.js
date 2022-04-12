document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();

});

function iniciarApp() {



    const numeros = [1,2,3,4];

    //numeros duplicados SIN validacion
    const duplicados = [...numeros].map( numero => numero * 2 );

    //numeros duplicados CON validacion
    const numeros2 = [1,2,3,4,'hola'];

    const duplicados2 = [...numeros2].map( numero => {


        if( isNaN(numero) ){
            console.log(`Este elemento no es un numero: ${numero}`)
        }else{
            return numero * 2;
        }


    })



    console.log(duplicados);
    console.log(duplicados2);



    const monos = ["🐒", "🦍", "🦧"];


    //salida esperada = ["🐒🍌", "🦍🍌", "🦧🍌"]

    const monosConBanana = [...monos].map( mono => mono + '🍌' );
    
    console.log(monosConBanana)   
 





















}

