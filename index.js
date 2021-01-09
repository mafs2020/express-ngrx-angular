const express = require('express');
const app = express();
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
require('./db/conexion');

const alumno = require('./rutas/alumnoRutas');
const puestoRutas = require('./rutas/puestoRutas');
app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        next();
    }
);
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true, limit: 10000000}));
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use('/', alumno);
app.use('/puesto', puestoRutas);


app.listen(3000, () => console.log('server on port 3000'));