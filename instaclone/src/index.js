import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Authenticate from './components/authentication/authenticate';
//import 'font-awesome/css/font-awesome.min.css';

let WrapApp = Authenticate(App);

ReactDOM.render(<WrapApp />, document.getElementById('root'));
