document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();

});

function iniciarApp() {


    //Sistema para un colegio que necesita guardar registro de sus alumnos, profesores y asignaturas.

    //Los alumnos tendran nombre y matricula.
    //Los profesores tendran nombre, sueldo y asignaturas.
    //Las asignatura tendran nombre, capacidad, un profesor asignado y alumnos asignados. la asignatura puede agregar alumnos

    //El colegio tendra un nombre, alumnos, profesores y asignaturas, el colegio puede contratar profesores, registrar asignatura y matricular alumnos.


    class Alumno {  

        constructor (nombre, matricula){
          this.nombre = nombre;
          this.matricula = matricula;
        }
   
    }


    class Profesor {

        constructor (nombre, sueldo){
            this.nombre = nombre;
            this.sueldo = sueldo;
            this.asignatura = null;
        }

        agregarAsignatura(asignatura){
            this.asignatura = asignatura
        }


        
    }



    class Asignatura{

        constructor(nombre, capacidad, profesor){
            this.nombre = nombre;
            this.capacidad = capacidad;
            this.profesor = profesor;
            this.alumnos = [];
        }

        agregarAlumno(alumno){
             this.alumnos.push(alumno);
        }
        //`Tu mensaje: ${variable} `
        mostrarInformacionAlumnos(){
            this.alumnos.forEach( alumno => {

                const informacionAlumno = `nombre: ${alumno.nombre} - matricula ${alumno.matricula}`;

                console.log(informacionAlumno)

            });
            
        }
          
    }

    class Colegio{

        
        constructor(alumno, profesor, asignatura) {
            this.alumno = alumno;
            this.profesor = profesor;
            this.asignatura = asignatura;
        }


    }

    //Ejercio 1
    //Crear 3 objetos alumnos

   
    const alumno1 = new Alumno("juan", 110)

    const alumno2 = new Alumno("pedro", 120)

    const alumno3 = new Alumno("raul", 130)

    
    //Ejercicio 2
    //Crear objeto asignatura y usar su metodo agregarAlumno para agregar los 3 alumnos creados anteriormente.


    const asignatura = new Asignatura("matematicas", 30, "daniel");
   
    asignatura.agregarAlumno(alumno1);
    asignatura.agregarAlumno(alumno2);
    asignatura.agregarAlumno(alumno3);
    
        
    //console.log(asignatura)


          
    //Ejercicio 3

    //Crear un metodo en "Asignatura" que permita recorrer los alumnos registrados y mostrarlos por pantalla
    /*Salida esperada: 

        -----Listado de alumnos--------
        nombre: juan - matricula: 110
        nombre: pedro - matricula: 120
        nombre: raul - matricula: 130    

    */

    asignatura.mostrarInformacionAlumnos();    


    //Crear un profesor para posteriormente crear un asignatura
    
    
    const profesor1 = new Profesor("José", 500);
    console.log(profesor1)

   //Crear asignatura con un profesor


    const asignatura2 = new Asignatura("Ciencias", 30, profesor1);
    
    //NO RECOMENDADO
    //profesor1.asignatura = asignatura2;

    //MAS RECOMENDADO
    profesor1.agregarAsignatura(asignatura2);

    console.log(asignatura2);

    

   





















}

