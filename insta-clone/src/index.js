import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Authenticate from './Authentication/Authenticate';

// console.log(App);
const HOCAuthenticate = Authenticate(App);


ReactDOM.render(<HOCAuthenticate />, document.getElementById('root'));

