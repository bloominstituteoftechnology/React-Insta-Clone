import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import SearchBar from './components/SearchBar/SearchBar.js'


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
