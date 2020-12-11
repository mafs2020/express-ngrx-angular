const express = require('express');
const app = express();
const morgan = require('morgan');

require('./db/conexion');

const alumno = require('./rutas/alumnoRutas');
const puestoRutas = require('./rutas/puestoRutas');

app.use(express.json());
app.use(express.urlencoded({extended: false, limit: 10000000}));
app.use(morgan('dev'));

app.use('/', alumno);
app.use('/puesto', puestoRutas);


app.listen(3000, () => console.log('server on port 3000'));