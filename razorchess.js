var express = require('express');
var path = require('path');


var app = express();
app.set('view engine', 'pug');
app.set('views', './views')

var myLogger = function (req, res, next) {
  console.log('LOGGED');
  next();
};

app.use(myLogger);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/public', function(req, res){

    res.render('index', {title: 'hey', message: 'publi'});
});



app.get('/game', function(req, res){

    res.render('index', {title: 'hey', message: 'hello there'});
});



app.listen(8081)
