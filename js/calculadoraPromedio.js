document.addEventListener('DOMContentLoaded', ()=>{
    iniciarApp();

});

const iniciarApp = () => {

// 6.5 + 5.4 + 3,1
// 15
// 15/3
// 5
//Parte 1: recibir 3 notas mediante un prompt
let notasGuardadas = [];
let limiteDeNotas = 4;


for (let i = 1; i <= limiteDeNotas; i++) {

    let notasRecibida = window.prompt('Ingresar notas');
    let numeroConvertido = parseFloat(notasRecibida);
    notasGuardadas.push(numeroConvertido);

}

//let sumar = notasGuardadas += 

//recorrer las notas guardadas para ir sumandolas
let resultadoSuma = 0;

for (let i = 0; i < notasGuardadas.length; i++) {
    resultadoSuma += notasGuardadas[i];
}
//dividir las notas ya sumadas por la cantidad de notas

const promedio = resultadoSuma / limiteDeNotas;   
console.log(promedio);



}