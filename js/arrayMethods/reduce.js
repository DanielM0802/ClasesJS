document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();

});

function iniciarApp() {



 
    const numeros = [2,5,1,7,3];
    //18

    const suma = numeros.reduce( (acumulador, elemento) => acumulador + elemento);

    console.log(suma);


    const multiplicacion = numeros.reduce( (acumulador, elemento) => acumulador * elemento);

    console.log(multiplicacion);



    const palabras = ['Javascript','es','un','lenguaje','de', 'programación'];
    //Javascript es un lenguaje de programacion
    // ' '
    // interpolacion => ´  ${ds}  ´
    const palabraReducida = palabras.reduce( (acc, el) => acc + ' ' + el  );
   
    //usando otra sintaxis
    const palabraReducida2 = palabras.reduce( (acc, el) => `${acc } ${ el}`  );

    console.log(palabraReducida)
    console.log(palabraReducida2)


    //Transformar un array de numeros a una cadena de texto con esos numeros
    const numeros2 = [2,3,5];
    //salida esperada => '235'

    const numeroTransformado2  = numeros2.reduce( (acc, el) => `${acc}${el}`);

    //otra opcion
    const numeroTransformado3 = numeros2.reduce( (acc, el) => acc + el.toString() );


    console.log(numeroTransformado2)
    console.log(numeroTransformado3)


    const arrays = [
        ['1','2','3'],
        [true],
        [4,5,6]
    ]

    //salida esperada: ['1','2','3',true,4,5,6];
    
    const flat = arrays.reduce( (acc, el) => acc.concat(el))

    console.log(flat)























}
