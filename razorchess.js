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

/*var bodyParser     =        require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());*/



app.get('/calculate', function(req, res){

    var fen_string = req.query.fen;
    console.log('fen: ' + fen_string);
//==============================
var config = require('config');
var engine_config = config.get('Engine.path');
console.log(engine_config);
//================
    var stockfish_exe_path = engine_config;
    var cmd = stockfish_exe_path;
    //var cmd = '/kano/razorchess/stockfish/stockfish-7-mac/Mac/stockfish-7-64'
    var spawn = require('child_process').spawn;

    //to decode the buffer
    var StringDecoder = require('string_decoder').StringDecoder;
    var decoder = new StringDecoder('utf8');

    stockfish = spawn(cmd);

    //need to grab this stodout and make some decision on how to make the move
    stockfish.stdout.on('data', (data) => {
        var message = decoder.write(data);
        var lines = message.split('\n')[1];
        var parts = lines.trim().split(' ')
        var index = parts.findIndex(function(elem){return elem == 'bestmove'});
        if (index != -1) {
            
            console.log('looks good ------ ' + message.trim());
            res.send(parts[index + 1]);  
        }
    });

    stockfish.stdin.write('isready\n');

    stockfish.stdin.write('position fen ' + fen_string + '\n');

    stockfish.stdin.write('go movetime 1000\n');
});



app.listen(8081)
//=======
//runs stockfish executable and outputs uci responses to console


