import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Authenticate from './components/Authentication/Authenticate';
import App from './App';

ReactDOM.render(<Authenticate app={App} />, document.getElementById('root'));
