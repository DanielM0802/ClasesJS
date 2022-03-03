document.addEventListener('DOMContentLoaded', ()=>{
    iniciarApp();

});

const iniciarApp = () => {

const ciudad = window.prompt('Ingresa destino');    

if (ciudad ==='Santiago') {
    console.log('1000');
}else if(ciudad === 'Londres'){
    console.log('20000');
}else{
    console.log('Ciudad no registrada')    
}



switch (ciudad) {

    case 'Santiago':
        console.log('1000');
        break;
    
    case 'Londres':
        console.log('20000');
        break;
        
    default :
        console.log('Ciudad no registrada')    


}




};

