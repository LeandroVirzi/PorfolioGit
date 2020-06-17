const express = require ('express');
const app = express();
const morgan = require ('morgan');

// settings
// validamos el puerto, en caso exista un puerto en el sistema que lo tome, de lo contrario inicie en el 3000
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// middlewares
app.use(morgan('dev'));// peticiones
app.use(express.urlencoded({extended: false}));// interpreta los datos enviados desde algun formulario
app.use(express.json());// permite que el servidor resiva parametros json

// routes
app.use(require('./routes/index')); // utiliza desde la carpeta routes el archivo index.js
app.use('/api/movies', require('./routes/movies'));

// starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});