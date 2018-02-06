import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import dummyData from './dummy-data';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App data={dummyData}/>, document.getElementById('root'));
registerServiceWorker();
