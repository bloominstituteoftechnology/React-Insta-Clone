import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//
import Authenticate from './Authentication/Authenticate';
const WrappedApp = Authenticate(App);
//

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<WrappedApp />, document.getElementById('root'));
