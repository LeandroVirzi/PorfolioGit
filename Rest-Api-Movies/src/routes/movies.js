const { Router } = require('express');
const router = Router();

const movies = require('../sample.json');
console.log(movies);

// creo otra ruta.

router.get('/', (req, res) => {
    res.json(movies);
});

// metodo post
router.post('/', (req, res) => {
    //console.log (req.body);
    //res.send('recived');
    const { title, director, year, rating } = req.body;// almaceno los datos en las variables
    if (title && director && year && rating) {
        const id = movies.length + 1;// agregar un id... 
        const newMovie = {...req.body, id};// almaceno dentro de un objeto todos los datos
        movies.push(newMovie);
        console.log (newMovie);
        res.json(movies);
    } else {
        res.status(500).json({error: 'There was an error. '});
    }
});

module.exports = router;
