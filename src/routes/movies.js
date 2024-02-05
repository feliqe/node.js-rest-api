const { Router } = require("express");
const router = Router();
const _ = require('underscore');

 //json externo
 const movies = require('../sample.json');
 router.get('/', (req, res) => {
    res.json(movies);
 })

 //recibir parametros por post en json
 router.post('/', (req, res) => {
     const {title, director, year, rating } = req.body;
     //validamos los datos recibidiso
     if(title && director && year && rating ){
         const id  = movies.length + 1;
         //posicion  de los campos en el json
         const newMovie = {id ,...req.body};
         movies.push(newMovie);
         res.json(movies);
     }else{
         //res.json({error: 'Solicitud incorrecta.'});
         //definimos el erro en caso de caida de la conexion con el error 500
         res.status(500).json({error: 'Hubo un error'})
     }
 });

 //ruta de eliminar
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    _.each(movies, (movie, i) => {
        if(movie.id == id){
            movies.splice(i, 1);
        }
    })
    res.send('delete');
});

//actualizar datos
router.put('/:id', (req, res) => {
    const {id} = req.params;
    const { title, director, year, rating } = req.body;
    if(title && director && year && rating ){
        _.each(movies, (movie, i) => {
            if(movie.id == id){
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });
        res.json(movies);
    }else{
        res.status(500).json({error: 'Tiene un error'});
    }
});


module.exports = router;