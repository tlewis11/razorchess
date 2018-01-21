/* eslint-disable import/first */
require('./Square.css');
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import {ORIENTATION} from '../constants/constants.js';
export default class Square extends Component {
  constructor(props) {
    super(props);
  }
	
  render() {
	const {name} = this.props;
    const isBlack = (name.charCodeAt(0) + name.charCodeAt(1)) % 2 === 0;
    const classes = classNames({
      'react-chessboard-square': true,
      'react-chessboard-square--black': isBlack,
      'react-chessboard-square--white': !isBlack
      //'react-chessboard-square--over': isOver
    });
	return (
		  <div className={classes}>
			{this.props.children}
		  </div>
    );
  }
}
