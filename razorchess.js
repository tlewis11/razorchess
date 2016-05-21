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


app.get('/game', function(req, res){

    res.sendfile('./public/index.html');
});

function run_cmd(cmd, args, cb, end) {
    var spawn = require('child_process').spawn,
        child = spawn(cmd, args),
        me = this;
    child.stdout.on('data', function (buffer) { cb(me, buffer) });
    child.stdout.on('end', end);
}


app.get('/calculate', function(req, res){

    var foo = new run_cmd(
        'netstat', ['-an'],
        function (me, buffer) { me.stdout += buffer.toString() },
        function () { res.send(me.stdout) }
    );

});



app.listen(8081)
