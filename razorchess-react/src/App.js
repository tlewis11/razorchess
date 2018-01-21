import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chessboard from './components/Chessboard'

class App extends Component {
  constructor(props) {
	super(props);
  	this.state = { fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'};
  }

  render() {
	var board_config = {
		lightColor: '#ffffb3',
		darkColor: '#00b33c'
	}
    return (
      <div className="App">
		<Chessboard config={board_config} orientation="white" fen={this.state.fen}/>
      </div>
    );
  }
}

export default App;
