import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Authenticate from './components/Authentication/Authenticate';

const WrappedApp = new Authenticate(App);

ReactDOM.render(<WrappedApp />, document.getElementById('root'));
