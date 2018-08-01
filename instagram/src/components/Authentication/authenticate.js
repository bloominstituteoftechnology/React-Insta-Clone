import React, { Component } from 'react';
import Login from '../login/login';

const Authenticate = App =>
  class extends Component {
      constructor(props) {
          super(props);
          this.state = {
              loggedIn: false
          }
     }

     componentDidMount() { // runs after render() 
        console.log(2); // logs second
        // check if user exists in localstorage
        // if it does, set state to true, if it doesnt set state to false 
      }
    
    render() { 
        console.log(1); 
        if (this.state.loggedIn) return <App />;
        return <Login />;
    }
}
 
export default Authenticate;