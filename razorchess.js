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

//call bash cmd - use this for communicating with stockfish
/*function run_cmd(cmd, args, cb, end) {
    var spawn = require('child_process').spawn,
        child = spawn(cmd, args),
        me = this;
    child.stdout.on('data', function (buffer) { cb(me, buffer) });
    child.stdout.on('end', end);
}*/


app.get('/calculate', function(req, res){




    var cmd = '/kano/razorchess/stockfish/stockfish-7-mac/Mac/stockfish-7-64'
    var spawn = require('child_process').spawn;

    //to decode the buffer
    var StringDecoder = require('string_decoder').StringDecoder;
    var decoder = new StringDecoder('utf8');

    stockfish = spawn(cmd);

    //need to grab this stodout and make some decision on how to make the move
    stockfish.stdout.on('data', (data) => {
        var message = decoder.write(data);
        console.log(message.trim());

        var search_test = message.trim().search('bestmove'); 
        console.log(search_test);
        if (search_test != -1) {
            
            console.log('looks good ------ ' + message.trim());
            res.send(message.trim().split(" ")[5]);  
        }
    });

    console.log('======== send readyok ========');
    stockfish.stdin.write('isready\n');
    

    console.log('======== send fen string ========');

    stockfish.stdin.write('position fen r1bqkbnr/pp1ppppp/2n5/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3\n');
    
    stockfish.stdin.write('go movetime 1000\n');
    console.log('======== get the move ========');
    console.log('======== respond with  move ========');

    fen_string = '' 
    //res.send(fen_string)

});



app.listen(8081)
//=======
//runs stockfish executable and outputs uci responses to console


