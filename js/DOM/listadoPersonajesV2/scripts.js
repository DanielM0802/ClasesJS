document.addEventListener('DOMContentLoaded', () => iniciarApp() );

function iniciarApp() {


    
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

  const personaje2 = new Personaje('Darth Vader', 202,136, "yellow", "male")

  const personaje3 = new Personaje('Leia Organa', 150, 49, 'brown', 'female')

  const personaje4 = new Personaje('Anakin Skywalker', 188, 84, 'blue', 'male')

   

 
    const personajes = [personaje1, personaje2, personaje3, personaje4 ];



    const contenedorPersonajes = document.querySelector('.contenedor-personajes');


    //Creando nuestro propio nodo
    const parrafoPrueba = document.createElement('P');
    parrafoPrueba.textContent = 'un poco de texto';



    const boton = document.querySelector('.btn-generar');
    boton.addEventListener('click', () => generarPersonajes());





    function generarPersonajes(){
        
        //const existePersonaje = document.querySelector('.card-body');
 
        if (contenedorPersonajes.childElementCount === 0 ){
             personajes.forEach( personaje => contenedorPersonajes.appendChild( personaje.generarHtml())
            );
        }
        
        
    }

    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', event => procesarFormulario(event) )


    
    function procesarFormulario(event) {
        event.preventDefault();
        const busqueda = formulario['busqueda'].value;
        const opcion = formulario['opcion'].value;

        const valido = validarFormulario(busqueda, opcion);


        
        if ( !valido ) return; 
        


        //filtrar personajes
        console.log('filtrando personajes...')
        
        filtrarPersonajes(busqueda,opcion);
       
    }

    function validarFormulario(busqueda, opcion){

        return busqueda.trim() !== "";
        
    }

    function filtrarPersonajes(busqueda, opcion){

        busqueda = busqueda.trim();
        //consultar que propiedad escogio el usuario
        console.log(opcion)
        //si la opcion es altura o peso, la busqueda debe ser un numero
       
        

        if( opcion === 'altura' || opcion === 'peso' ){
            console.log('opcion numerica seleccionada')
            if( isNaN(busqueda) ){
                console.log('campo no valido');
                return;
            }

        
            console.log(busqueda)
            const personajesFiltrados = personajes.filter( personaje => personaje[opcion] == busqueda );

            console.log(personajesFiltrados);

        }else{

            const personajesFiltrados = personajes.filter( personaje => {
            
                const cadena = personaje[opcion].toUpperCase();
                const subcadena = busqueda.toUpperCase(); 
                
                return cadena.includes(subcadena);
            });
            
            console.log(personajesFiltrados);
            
        }






    }


}

