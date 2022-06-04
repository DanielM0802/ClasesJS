document.addEventListener('DOMContentLoaded', () => iniciarApp());

function iniciarApp() {

    //OVERRIDE

    class Persona{
        
        constructor(nombre,edad){
            this.nombre = nombre;
            this.edad = edad;
        }

        saludar(){
            return `Soy una PERSONA llamada ${this.nombre}`;
        }

    }

    class Estudiante extends Persona{

        constructor(nombre,edad,matricula){
            super(nombre,edad);
            this.matricula = matricula;
        }

        saludar(){
            return `Soy una(o) ESTUDIANTE llamada(o) ${this.nombre}`;
        }
        

    }


    const juan = new Persona('Juan',17);
    const matias = new Estudiante('Matias',15,'28392874-0');

    console.log( juan.saludar() ); 

    console.log( matias.saludar() );
    
























}

