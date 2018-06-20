import React from 'react';
import ReactDOM from 'react-dom';
import Authenticate from './Authentication/Authenticate';
import App from './App';
import './index.css';

const AuthApp = Authenticate(App);

ReactDOM.render(<AuthApp />, document.getElementById('root'));
