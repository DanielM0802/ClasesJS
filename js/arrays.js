document.addEventListener('DOMContentLoaded', ()=>{
    iniciarApp();

});

const iniciarApp = () => {

const pais1 = 'Chile';
const pais2 = 'Argentina';

const paises = ['Chile' , 'Argentina', 'Brasil', 'Uruguay', 'Peru' ];


paises.push('Japon');
paises.push('China');

paises.unshift('Mexico');



const size = paises.length;
const lastElement = size - 1;



console.log(size);

console.table(paises);
console.log( paises[lastElement] );






};


