import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Authentication from './components/Authentication/Authentication.js';
import Login from './components/Login/Login.js';


const HOCAuthentication = Authentication(App);
const HOCLogin = Authentication(Login);


class Index extends Component {




  componentDidMount() {
    console.log("index.js CDM")
  }

  render(){
    return(
      <div>
        <App />
      </div>
    )
  }
}

//turn authentication into a component and not a function as it is now.

//Authenticaiton runs first

//checks state for if logged in

//if so, render te

ReactDOM.render(<Index />, document.getElementById('root'));
