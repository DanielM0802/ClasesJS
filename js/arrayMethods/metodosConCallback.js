document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();

});

function iniciarApp() {


    const array = ['😊', '🤗', '😭' , '😆'];

    //encontrar y devolver el emoji 😭 
    const resultado =  array.find( emoji => emoji  === '😭'   );

    console.log(resultado);


    //encontrar la posicion del emoji 😭
    const resultado2 = array.findIndex( emoji => emoji === '😆');


    console.log(resultado2);

    const resultadosTest = ['✅', '✅' , '✅', '✅', '✅'];
    const respuesta1 = resultadosTest.every( elemento => elemento === '✅' );
    
    console.log(respuesta1);




    const resultadosTest2 = ['✅', '❌', '✅' , '✅', '✅'];
    const respuesta2 = resultadosTest2.every( elemento => elemento === '✅' );
    
    console.log(respuesta2);








}


