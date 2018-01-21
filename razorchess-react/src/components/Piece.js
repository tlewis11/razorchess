/* eslint-disable import/first */
require('./Piece.css');

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { PIECES } from '../constants/constants';

export default class Piece extends Component {
  static propTypes = {
    canMove: PropTypes.bool.isRequired,
    isDragging: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    //const { name, canmove, isdragging } = this.props;
    const { name, canMove, isDragging } = this.props;
    const classes = classNames({
      'react-chessboard-piece': true,
      [`react-chessboard-piece--${name}`]: true,
      'react-chessboard-piece--can-move': canMove,
      'react-chessboard-piece--dragging': isDragging
    });

    return (
      <div className={classes} />
    );
  }
}
