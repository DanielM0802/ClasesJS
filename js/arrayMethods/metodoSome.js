document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();

});

function iniciarApp() {


    //hay algun test que fue correcto?
    const resultadosTest = ['❌', '❌' , '✅'];
    const resultado = resultadosTest.some( elemento => elemento === '😎' );
    console.log(resultado);

    const personajes = [
        
        ['Luke Skywalker',172 ,77,'blue', 'male'],
        ['Darth Vader', 202,136, 'yellow', 'male'],
        ['Leia Organa', 150, 49, 'brown', 'female'],
        ['Anakin Skywalker', 188, 84, 'blue', 'male']
        
    ];

    //some devulve true cuando la condicion se cumple al menos 1 vez


    console.log('Hay al menos un personaje que sea de genero femenino?'); 
    //respuesta correcta: true

    const resultado2 = personajes.some (persona => persona[4] === 'female');
    console.log(resultado2);

    console.log('Hay al menos un personaje que tenga ojos azules? ');
    //blue

     const resultado3 = personajes.some (personaje => personaje[3] === 'blue');
     console.log(resultado3)

     console.log('Hay al menos un personaje que pese al menos 50 kg?');


     const resultado4 = personajes.some (personaje => personaje[2] >= 50)
     console.log(resultado4);

    




}
