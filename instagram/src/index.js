import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/Login/Login';
import Authenticate from './components/Authentication/Authenticate';

const WrappedApp = Authenticate(Login);

ReactDOM.render(<WrappedApp />, document.getElementById('root'));
