document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();

});

function iniciarApp() {


    //Sistema para un colegio que necesita guardar registro de sus alumnos, profesores y asignaturas.

    //Los alumnos tendran nombre y matricula.
    //Los profesores tendran nombre, sueldo y asignaturas.
    //Las asignatura tendran nombre, capacidad, un profesor asignado y alumnos asignados. la asignatura puede agregar alumnos

    //El colegio tendra un nombre, alumnos, profesores y asignaturas, el colegio puede contratar profesores, registrar asignaturas y matricular alumnos.


    class Alumno {  

        constructor (nombre, edad, matricula){
          this.nombre = nombre;
          this.edad = edad;
          this.matricula = matricula;
        }

   
    }


    class Profesor {

        constructor (nombre,edad, sueldo){
            this.nombre = nombre;
            this.edad = edad;
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



    //Ejercio 1
    //Crear 3 objetos alumnos

   
    const alumno1 = new Alumno("juan",14, 110)

    const alumno2 = new Alumno("pedro",16, 120)

    const alumno3 = new Alumno("raul",12, 130)

    
    //Ejercicio 2
    //Crear objeto asignatura y usar su metodo agregarAlumno para agregar los 3 alumnos creados anteriormente.


    const asignatura1 = new Asignatura("matematicas", 30, "daniel");
   
    asignatura1.agregarAlumno(alumno1);
    asignatura1.agregarAlumno(alumno2);
    asignatura1.agregarAlumno(alumno3);
    
        
    //console.log(asignatura)


          
    //Ejercicio 3

    //Crear un metodo en "Asignatura" que permita recorrer los alumnos registrados y mostrarlos por pantalla
    /*Salida esperada: 

        -----Listado de alumnos--------
        nombre: juan - matricula: 110
        nombre: pedro - matricula: 120
        nombre: raul - matricula: 130    

    */

    asignatura1.mostrarInformacionAlumnos();    


    //Crear un profesor para posteriormente crear un asignatura
    
    
    const profesor1 = new Profesor("José",54, 500);
    const profesor2 = new Profesor("Pedro",34, 550);
    console.log(profesor1)

   //Crear asignatura con un profesor


    const asignatura2 = new Asignatura("Ciencias", 30, profesor1);
    
    //NO RECOMENDADO
    //profesor1.asignatura = asignatura2;

    //MAS RECOMENDADO
    profesor1.agregarAsignatura(asignatura2);

    console.log(asignatura2);

    //El colegio tendra un nombre, alumnos, profesores y asignaturas, el colegio puede contratar profesores, registrar asignaturas y matricular alumnos.

    class Colegio{

        
        constructor(alumnos, profesores, asignaturas) {
            this.alumnos = alumnos;
            this.profesores = profesores;
            this.asignaturas = asignaturas;
        }
        
        
        agregarAlumno(alumnoNuevo){
            this.alumnos.push(alumnoNuevo)
        }

        registrarAsignatura(asignaturaNueva){
            this.asignaturas.push(asignaturaNueva)

        }

        contratarProfesores(profesorNuevo){
            this.profesores.push(profesorNuevo)

        }


 }

    const alumnos = [alumno1,alumno2,alumno3];

    const asignaturas = [ asignatura1, asignatura2 ];

    //const nombreObjeto = new Clase(argumento1,argumento2) 
    const colegio = new Colegio(alumnos, [profesor1,profesor2], asignaturas) 
    

    //otra forma de acceder a las propiedades
    console.log(colegio['asignaturas'])

    //Metodo 1: metodo que permita matricular alumnos
    const alumno4 = new Alumno("diego",10, 170)

    colegio.agregarAlumno(alumno4);

    
    //Metodo 2: metodo que permita regitrar asignaturas
    const asignatura3 = new Asignatura("Ingles", 30, profesor1);
    
    colegio.registrarAsignatura(asignatura3);

    
    //Metodo 3: metodo que permita contratar profesores
    const profesor3 = new Profesor("Maria",64, 590);
    
    colegio.contratarProfesores(profesor3)
    

    console.log(colegio);


    


    




    
    //Metodos de colegio


    

   





















}

