document.addEventListener('DOMContentLoaded', () => iniciarApp() );

function iniciarApp() {




    const boton = document.querySelector('.generar');
    const tipo = document.querySelector('#tipo');

    boton.onclick = () => {
        console.log('click')
        consultarApi(tipo.value);
    }



}

const consultarApi = type => {
    
    fetch(`http://www.boredapi.com/api/activity?type=${type}`)
    .then( res => res.json() )
    .then( data =>  cargarInformacion(data) );
}

    
const cargarInformacion = data => {
    const actividad = document.querySelector('.actividad');
    const tipo = document.querySelector('.tipo');

    const {activity, type} = data

    actividad.textContent = activity
    tipo.textContent = type

}



