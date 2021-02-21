var express = require('express');
var path = require('path');
var stockfish = require('stockfish');
var engine = stockfish();

//gonna set this here since the engine is kind enough to wait for us to do it
engine.onmessage = (event) => {
	var data = (event.data ? event.data : event);
	var index = data.search('bestmove');
	//only return best move...
	if (index != -1) {
		//second part is the actual move
		engine.res.send(data.split(' ')[index + 1]);
	}
};


var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

// morgan: https://github.com/expressjs/morgan
app.use(morgan('common'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/health', function (req, res) {
    res.send('HEALTHY!');
});

app.get('/game', function(req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

//takes fen, returns 'best' move
app.get('/calculate', function(req, res) {

	var fen_string = req.query.fen;

	engine.res = res;
	console.log(engine.onmessage.toString());
	engine.postMessage('isready');
	engine.postMessage('position fen ' + fen_string);
	engine.postMessage('go movetime 1000');
});


app.listen(8081); //todo: make this a config option
//=======
//runs stockfish executable and outputs uci responses to console


