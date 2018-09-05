import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/Login/Login';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
