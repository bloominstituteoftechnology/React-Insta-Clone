import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/Login/Login';
import Authenticate from './components/Authentication/Authenticate';

let AuthenticateApp = Authenticate(App);

ReactDOM.render(<AuthenticateApp />, document.getElementById('root'));
registerServiceWorker();
