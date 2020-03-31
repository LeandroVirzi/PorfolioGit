//importamos express
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
//treaemos la version de la api.
const {API_VERSION} = require('./config');//estaba con parentesis

// load routings
//... por ahora queda vacio.

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//configured header http
//...


//ruter basic
//...

//todas las configuraciones van a estar dentro de app.
module.exports = app;
