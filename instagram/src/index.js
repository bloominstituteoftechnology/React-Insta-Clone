import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Authentication from './components/Authentication/Authentication.js';

const HOCApp = Authentication(App);
// const HOCLogin = Authentication(Login);

class Index extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
    }
  }

  render(){
    return (
      <div>Index.js
        <HOCApp />
      </div>
    )
  }

  componentDidMount() {
    console.log("index.js CDM")
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
