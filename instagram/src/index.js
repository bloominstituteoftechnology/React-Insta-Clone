import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Authenticate from './components/Authenticate/Authenticate.js'
const OG = Authenticate(App);
ReactDOM.render(<OG />, document.getElementById('root'));
registerServiceWorker();
