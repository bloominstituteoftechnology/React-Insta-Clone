import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Authenticate from './components/Authentication/Authenticate'

// ReactDOM.render(<App />, document.getElementById('root'));
const WrappedApp = Authenticate(App);
ReactDOM.render(<WrappedApp />, document.getElementById('root'));

