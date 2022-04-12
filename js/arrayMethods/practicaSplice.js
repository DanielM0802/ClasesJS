document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();

});

function iniciarApp() {


    let tareasPendientes = ['Pasear al perro','Reunion a la 17','Comprar pan'];

    //splice(indicePartida, numeroElementosAEliminar)

    //eliminar las 2 ultimas tareas
    tareasPendientes.splice(1, 2);
    console.log(tareasPendientes);


    //reseteando array
    tareasPendientes = ['Pasear al perro','Reunion a la 17','Comprar pan'];

    //cambiar tare1: 'pasear al perro' por 'limpiar al perro'

    //splice(indicePartida, 1, elementoAInsertar)
    tareasPendientes.splice(0, 1, 'limpiar al perro');


    console.log(tareasPendientes);



    tareasPendientes = ['Pasear al perro','Reunion a la 17','Comprar pan'];
    //agregar otra tarea al listado
    

    tareasPendientes.splice(3, 0,  'cocinar');

    console.log(tareasPendientes);

    //eliminar 2 primeras tareas y agregar 1
    tareasPendientes = ['Pasear al perro','Reunion a la 17','Comprar pan'];
    
   
    tareasPendientes.splice(0, 2, 'dormir')

    console.log(tareasPendientes);
    

}