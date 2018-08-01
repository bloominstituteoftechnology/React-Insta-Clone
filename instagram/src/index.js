import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Authenticate from './Authentication/Authentication'

ReactDOM.render(Authenticate(<App />), document.getElementById('root'));
registerServiceWorker();
