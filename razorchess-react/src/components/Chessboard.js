/* eslint-disable import/first */
require('./Chessboard.css');
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Square from './Square';
import {ORIENTATION, SQUARES} from '../constants/constants.js';
import Piece from './Piece';
import {getPieces} from '../utils/fen.js';

export default class Chessboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {

	const { orientation, fen } = this.props;
    const pieces = getPieces(fen);
  	let squares = [];
   	for (let i = 0; i < 64; i++) {
      const piece = pieces[i];
      const square = SQUARES[i];
	  const isBlack = (square.charCodeAt(0) + square.charCodeAt(1)) % 2 === 0;
      squares.push(
        <Square name={square} key={square} isBlack={isBlack}>
			{piece && <Piece canMove={false}
                                square={square} name={piece} isDragging={false}/>}
        </Square>
      );
	}
	const classes = classNames({
		'react-chessboard': true,
		'react-chessboard--flipped': orientation === ORIENTATION.BLACK
	});
	return (
		<div className={classes} canMove={false}>
			{squares}
		</div>
	);
  }
}
