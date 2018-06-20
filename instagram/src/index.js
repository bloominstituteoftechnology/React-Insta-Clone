import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Authenticate from './HOCs/Authenticate'

import Login from './components/Login/Login'

const AuthenticatedApp = Authenticate(App)

//ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<AuthenticatedApp />, document.getElementById('root'));
ReactDOM.render(<Login />, document.getElementById('root'));
