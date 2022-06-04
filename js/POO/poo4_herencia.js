document.addEventListener('DOMContentLoaded', () => iniciarApp());

function iniciarApp() {



    //La clase hija contiene todos los metodos y propiedades de la clase padre

    class Persona {

        constructor(nombre, edad){
            this.nombre = nombre;
            this.edad = edad;
        }
        

    }

    class Alumno extends Persona{

        constructor(nombre, edad, matricula){
            super(nombre, edad);
            this.matricula = matricula;
        }


    }

    class Profesor extends Persona{
          constructor(nombre, edad, sueldo, asignatura){
          super(nombre, edad);
          this.sueldo = sueldo;
          this.asignatura = asignatura;
        }

    }

    const alumno1 = new Alumno('Pedro',13,'20938293-2');

    console.log(alumno1)


    const profesor1 = new Profesor("José",54,490000,"Matematicas");
    console.log(profesor1)



















}
