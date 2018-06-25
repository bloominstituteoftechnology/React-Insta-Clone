
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Authenticate from './components/Authentication/Authenticate';

const WrapApp = Authenticate(App);
ReactDOM.render(<WrapApp />, document.getElementById('root')); 
