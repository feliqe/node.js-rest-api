const express = require("express");
const app = express();
const morgan = require('morgan');

//configuracion validar e puerto si hay en la nube si no usar 90
app.set('port', process.env.PORT || 90);
app.set('json spaces', 2);

//midedlewares
app.use(morgan('dev'));
//los datos del formulario
app.use(express.urlencoded({extended: false}));
//recibir formato json
app.use(express.json());

//rutas dentro de la carpeta de ruta con un alias api
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/users'));

//indicamos el puerto
app.listen(app.get('port'), () => {
    console.log(`server purto ${app.get('port')}`);
});
