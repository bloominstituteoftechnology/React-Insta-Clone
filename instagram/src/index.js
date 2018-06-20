import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Authenticate from './components/Authentication/Authenticate';

const InstagramApp = Authenticate(App);

ReactDOM.render(<InstagramApp />, document.getElementById('root'));
