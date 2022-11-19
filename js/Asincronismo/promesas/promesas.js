document.addEventListener('DOMContentLoaded', () => iniciarApp() );

function iniciarApp() {


    //Promesas

    const promesa1 = Promise.resolve("hola");
    console.log(promesa1)
    promesa1.then( res => console.error(res)  )


    const promesa = Promise.reject("error");
    promesa.catch( res => console.log(res)  )





}


