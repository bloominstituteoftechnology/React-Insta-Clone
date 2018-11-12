import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/App/App';
import Authenticate from './Authenticate';

const Authentication = Authenticate(Main);

class App extends React.Component {  
  render() {
    return (
      <div>
      <Authentication />
      </div>
    )
  }
}

ReactDOM.render(<App /> , document.getElementById('root'));

