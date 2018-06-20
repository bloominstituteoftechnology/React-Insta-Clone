import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Authenticate from './Authentication/Authenticate';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const ValidatedApp = Authenticate(App);

ReactDOM.render(<ValidatedApp />, document.getElementById('root'));
registerServiceWorker();
