document.addEventListener('DOMContentLoaded', () => iniciarApp() );

function iniciarApp() {


    //Clase personaje que permita instaciar objetos con nombre, altura, peso, genero

    /*    const personajes = [
        
        ['Luke Skywalker',172 ,77,'blue', 'male'],
        ['Darth Vader', 202,136, 'yellow', 'male'],
        ['Leia Organa', 150, 49, 'brown', 'female'],
        ['Anakin Skywalker', 188, 84, 'blue', 'male']
        
    ]; */

    
   class Personaje {

    constructor (nombre, altura, peso, colorOjos,  genero) {
        this.nombre = nombre;
        this.altura = altura;
        this.peso = peso;
        this.colorOjos = colorOjos; 
        this.genero = genero;
    }

    //METODO
    generarHtml() {
        //Generar contenedor div
        const contenedor = document.createElement('DIV')
        contenedor.classList.add('card-body','border', 'mb-3', 'p-3')
        //Generar cadena con codigo html
        const contenidoCard = `
        <h4 class="text-center text-dark">${ this.nombre }</h4>
        <p class="text-center">${ this.altura }</p>
        <p class="text-center">${ this.peso }</p>
        <p class="text-center">${ this.colorOjos }</p>
        <p class="text-center">${ this.genero }</p>
        
        `
        //Agregar cadena al contenedor con innerHtml
        contenedor.innerHTML = contenidoCard;
        //retornar el contendor
        return contenedor;
    }    
   

  }


  const personaje1 = new  Personaje("Luke Skywalker",172 ,77,"blue", "male");
  console.log(personaje1)

  const personaje2 = new Personaje('Darth Vader', 202,136, "yellow", "male")
  console.log(personaje2)

  const personaje3 = new Personaje('Leia Organa', 150, 49, 'brown', 'female')
  console.log(personaje3)

  const personaje4 = new Personaje('Anakin Skywalker', 188, 84, 'blue', 'male')
  console.log(personaje4)

  
   const primerPersonaje = document.getElementById("personaje1")
  console.log(primerPersonaje)

    primerPersonaje.textContent = personaje2.nombre;
 
    const personajes = [personaje1, personaje2, personaje3, personaje4 ];


    console.log(personajes);

    const contenedorPersonajes = document.querySelector('.contenedor-personajes');

    console.log(contenedorPersonajes);

    //Creando nuestro propio nodo
    const parrafoPrueba = document.createElement('P');
    parrafoPrueba.textContent = 'un poco de texto';


    personajes.forEach((personaje) => {

        const card = document.createElement('DIV');
        card.classList.add('card-body','border', 'mb-3', 'p-3');

        const parrafoNombre = document.createElement('H4');
        parrafoNombre.textContent = personaje.nombre;
        parrafoNombre.classList.add("text-center", "text-dark");


        const parrafoEstatura = document.createElement('P');
        parrafoEstatura.textContent = personaje.altura;
        parrafoEstatura.classList.add("text-center");
        
        card.appendChild(parrafoNombre);
        card.appendChild(parrafoEstatura);

        //contenedorPersonajes.appendChild(card);
        
    });


    personajes.forEach( personaje => {

        contenedorPersonajes.appendChild( personaje.generarHtml() );

    });





    //contenedorPersonajes.appendChild(parrafo);

   // console.log(parrafo)



}

