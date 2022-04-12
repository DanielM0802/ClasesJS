document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();

});

function iniciarApp() {



    const array = ['🥩','🥩','🥑', '🍒', '🥩'];
    console.log(array);
    console.log('filtrar comida vegetariana: '); 
    const comidaVegetariana = array.filter(comida => comida !== '🥩' );
    console.log(comidaVegetariana);


    const numeros = [7,3,8,254,9,19,2,6,10];
    console.log(numeros);

    console.log('filtrar numeros pares: '); 
 
    const numerosPares = numeros.filter( numero => numero % 2 !== 0 );
    console.log(numerosPares)

    console.log('filtrar numeros mayores a 10: '); 

    const numerosMayoresAdiez = numeros.filter( numero => numero > 10);
    console.log(numerosMayoresAdiez); 


    
    const personajes = [
        
        ['Luke Skywalker',172 ,77,'blue', 'male'],
        ['Darth Vader', 202,136, 'yellow', 'male'],
        ['Leia Organa', 150, 49, 'brown', 'female'],
        ['Anakin Skywalker', 188, 84, 'blue', 'male']
        
    ];
    
    console.log(personajes)
    console.log('Personajes con un peso mayor a 80kg: ')
    
    const pesoMayor = personajes.filter(personaje => personaje[2] > 80);
    console.log(pesoMayor)    


    console.log('Personajes masculinos: ')
    
    const generoMasculino = personajes.filter(personaje => personaje[4] === 'male');

    console.log(generoMasculino);
    
    





}
