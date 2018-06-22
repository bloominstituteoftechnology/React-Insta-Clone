import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Authenticate from './components/Authentication/Authenticate';

// Authenticate app in wrapped component
const WrappedApp = Authenticate(App);

ReactDOM.render(<WrappedApp />, document.getElementById('root'));
registerServiceWorker();