import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App.js';
import Authenticate from './authentication/authenticate.js'

const WrappedApp = Authenticate(App)

ReactDOM.render(<WrappedApp />, document.getElementById('root'));
