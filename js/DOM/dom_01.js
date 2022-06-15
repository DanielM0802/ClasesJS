document.addEventListener('DOMContentLoaded', () => iniciarApp() );

function iniciarApp() {



    const titulo = document.querySelector('.titulo');
    console.log(titulo);

    const parrafo = document.getElementById('parrafo');
    console.log(parrafo)

    const link = document.querySelector('#link');
    console.log(link);


    const contenedor =  link.parentElement;

    const hijosDeContenedor = contenedor.children;

    //Acceder al texto de un elemento html
    parrafo.textContent;
    

    console.log( hijosDeContenedor );

   





}
