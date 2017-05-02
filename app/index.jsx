import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent.jsx'

ReactDOM.render(
    <SimpleComponent message="Hello, Earth."/>,
    document.querySelector('#root')
);