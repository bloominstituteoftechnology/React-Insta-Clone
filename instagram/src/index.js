import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Authenticate from './Authentication/Authenticate';


ReactDOM.render(Authenticate(<App />), document.getElementById('root'));

