import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chessboard from './components/Chessboard'

class App extends Component {
  render() {
	var board_config = {
		lightColor: '#ffffb3',
		darkColor: '#00b33c'
	}
    return (
      <div className="App">
		<Chessboard config={board_config} orientation="white"/>
      </div>
    );
  }
}

export default App;
