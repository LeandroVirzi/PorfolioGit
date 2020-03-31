const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 9998;//importamos el puerto. el puerto 3977 estaba siendo utilizado se reemplazo.
const { API_VERSION, IP_SERVER, PORT_DB } = require("./config");//version de la api.

//coneccion a la base de datos. 

mongoose.set("useFindAndModify", false);//solucionar error DeprecationWarning.

//no toma las varicables API_VERSION, IP_SERVER, PORT_DB,
//lo subi a mano localhost:27017 REVISAR.
//mongoose.connect('mongodb://${IP_SERVER}:${PORT_DB}/leandrovirzibd'

mongoose.connect('mongodb://localhost:27017/leandrovirzibd' , 
{ useNewUrlParser: true, useUnifiedTopology: true }, 
(err, res) => {
    if(err) {
       throw err;
    } else {
        console.log("La coneccion a la base de datos es correcta");
    
        app.listen(port, () => {
            console.log("######################");
            console.log("##### API REST #######");
            console.log("######################");
            console.log('http://localhost:9998/api/v1/');
            //console.log('http://${IP_SERVER}:${PORT_DB}/api/${API_VERSION}/');
        })
    }
}); 
