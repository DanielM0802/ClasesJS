document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();

});

function iniciarApp() {


    const arr1 = [1,2,3,4];
    const arr2 = [1,2,3,4];

    const copiaArr1 = arr1.slice(0,2);
    const copiaArr2 = arr2.splice(0,2);

    console.log(copiaArr1);
    console.log(copiaArr2);

    console.log(arr1);
    console.log(arr2);

    const frutas = ['pera','manzana','naranja'];
    //agregar uva entre pera y manzana
    
    const frutasModificadas = frutas.splice(87,1,);

    console.log(frutas);



}    