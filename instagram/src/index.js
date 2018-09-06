import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthenticateReturn from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
// import styled from 'styled-components';

ReactDOM.render(<AuthenticateReturn />, document.getElementById('root'));
registerServiceWorker();
