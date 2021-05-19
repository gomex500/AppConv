const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

const Routes = require('./routers/router');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(morgan('dev'));

app.use('/',Routes);

app.use(express.static(path.join(__dirname,'public')));


module.exports = app;