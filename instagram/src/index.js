import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Authenticate from './components/Authentication/Authenticate.js';

const HOCApp = Authenticate(App);

ReactDOM.render(<HOCApp />, document.getElementById('root'));
