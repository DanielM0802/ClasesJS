document.addEventListener('DOMContentLoaded', ()=>{
    iniciarApp();

});

const iniciarApp = () => {



const horaUsuario = window.prompt('Qué hora es?') ;

console.log(horaUsuario);
// 0 - 11 dia
//12 - 17 tarde
//18 - 24 noche200
// <> <= >= && || !
if ( horaUsuario <= 11 && horaUsuario >= 0 ) {
    console.log('Buenos dias!')
} else if (horaUsuario >= 12 && horaUsuario <= 17) {
    console.log('buenas tardes')
} else if(horaUsuario <=24 && horaUsuario >= 0 ) {
    console.log('buenas noches')
} else {
    console.log('hora ingresada no es valida')
};




};

