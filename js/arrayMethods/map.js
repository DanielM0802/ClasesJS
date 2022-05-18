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


    //console.log(duplicados);
    console.log(duplicados2);

    const monos = ["🐒", "🦍", "🦧"];

    //salida esperada = ["🐒🍌", "🦍🍌", "🦧🍌"]

    const monosConBanana = [...monos].map( mono => mono + '🍌' );
    
    console.log(monos)
    console.log(monosConBanana)   



    //PRACTICANDO CON MAP
    //Elevar cada uno de los numeros al cuadrado

    const numeros3 = [2,4,3,2,5];
    //salida esperada: [4,16,9,4,25]
    
    const numerosElevados = [...numeros3].map(numero => numero * numero);

    console.log(numerosElevados);

    
    //Transformar un array de numeros en String a int
    const numerosString = ['3','12','67','7','98','52','71','3','27','21'];
    //parseInt()
    
    const numeroTransformado = [...numerosString].map( numero => parseInt(numero)) 

    console.log(numeroTransformado)

    
    //Refactorizar funcion que transforma numeros negativos (practicaMap.js)

    const numeros4 = [-25,-3,-4,-3,5,3,5,2,21];
    //salida esperada: [-25,-3,-4,-3,-5,-3,-5,-2,-21]
    const numerosConvertidos = [...numeros4].map(numero => {
      if (numero > 0) {
          return numero * -1
      } else {
          return numero * 1
      }
   
    });
    console.log(numerosConvertidos);


    //2DA Refactorizacion

    const numerosConvertidos3 =  [...numeros4].map(numero => numero > 0 ? numero * -1 : numero * 1 );
    console.log(numerosConvertidos3);


    
    




}

