import React, { Component } from "react";
import Login from '../Login/Login';
import App from '../../App.js';

const Authenticate = App =>{
  class auth extends Component {
      constructor(){
          super();
          this.state ={loggedIn: false};
      } 
        // componentDidMount(){
        // if (!localStorage.getItem('user')){this.setState(
        //     {loggedIn: false}
        // );
        // }else{ this.setState({loggedIn: true})};
    
    
    render() {
    if(this.state.loggedIn) { return <App /> }
    else {
      return <App />
    }
    }
  };
}
// }

export default Authenticate;