document.addEventListener('DOMContentLoaded', () => iniciarApp() );

function iniciarApp() {



    // console.log('antes del timeout')

    // setTimeout( () => {
    //     console.log('Hola mundo con retraso')
    // } , 5000);


    // console.log('FIN')


    const todos = [
        {
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        },
        {
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false
        },
        {
          "id": 3,
          "title": "fugiat veniam minus",
          "completed": false
        },
        {
          "id": 4,
          "title": "et porro tempora",
          "completed": true
        }
    ]

    const findTodoById = (id, callback) => {


        const todo = todos.find( todo => todo.id === id );

        if (todo){
            callback(null, todo)
        }else{
            callback("No se encontro el todo con id: " + id)
        }


    }

    findTodoById(2, (err, todo) => {
        if(err) return console.log(err)
        console.log(todo)
    });

    findTodoById(3, (err, todo) => {
        if(err) return console.log(err)
        console.log(todo)
    })

    findTodoById(4, (err, todo) => {
        if(err) return console.log(err)
        console.log(todo)
    })


    //Callback Hell

    consultarAPI('api/getuserbyusername/juan123', data => {

        const user = data.user;

        consultarAPI('api/getcomprasbyuserid/' + user.id, data => {

            const compras = data.compras;

            consultarAPI('api/getcomprabyid/7', data => {

                consultarAPI('api/getcomprabyid/7', data => {

                    consultarAPI('api/getcomprabyid/7', data => {

                        consultarAPI('api/getcomprabyid/7', data => {

                            consultarAPI('api/getcomprabyid/7', data => {

                                consultarAPI('api/getcomprabyid/7', data => {

                                })
                            })

                        })
                    
                    })    

                })
                
            })

        })

    })


}


