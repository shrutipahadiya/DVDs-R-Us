//  Highest Level where we use ReactDOM.render();
import React from 'react';
import ReactDOM from 'react-dom'
import App from './app';

const root = document.querySelector('#root');

ReactDOM.render(
    <App />,
    root
)

