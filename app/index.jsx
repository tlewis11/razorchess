import React from 'react';
import ReactDOM from 'react-dom';

import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Board from './components/Board'

import './style/style.css'

ReactDOM.render(
    <Board/>,
    document.querySelector('#root')
);