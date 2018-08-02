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
      if (!localStorage.getItem('Username')) {
          this.setState({ loggedIn: false });
        } else {
          this.setState({ loggedIn: true });
        }
    }


    render() {
      if (this.state.loggedIn === true ) {
        console.log("user loggedIn, returning App")
        return (<App />);
      } else if (this.state.loggedIn === false) {
        console.log("user not Logged in, returning Login")
        return (<Login
          // pass={this.passwordHandler}
          // user={this.usernameHandler}
          // toStorage={this.toStorage}
          // state={this.state}
        />);
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
