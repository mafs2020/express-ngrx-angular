const express = require('express');
const app = express();
const morgan = require('morgan');


app.use(express.json());
app.use(express.urlencoded({extended: false, limit: 10000000}));
app.use(morgan('dev'));

app.listen(3000, () => console.log('server on port 3000'));