import React from 'react';
import App from '../../App';
import Login from '../Login/Login.js';

const Authenticate = App =>
  class extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        loggedIn: false,
      };
    }

    componentDidMount(){
      console.log("authentication CDM");
      console.log(App);
      console.log("index.js isuser");

    }

    render() {
      if (this.state.loggedIn === true ) {
        console.log("user loggedIn")
        return (<App />);
      } else if (this.state.loggedIn === false) {
        console.log("user not Logged in")
        return (<Login />);
      };

      // return (
      //   <div>
      //     <App />
      //     <h1>Authentication!</h1>
      //   </div>
      // );

    }
  };
export default Authenticate;
