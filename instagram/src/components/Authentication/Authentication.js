import React from 'react';
// import Login from './components/Login/Login.js';
import App from '../../App';


const Authenticate = Component =>
  class extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        loggedIn: false,
      };
    }

    //checks state for if logged in

    //if so, renders App

    //if not, renders Login

    componentDidMount(){
      if (this.state.loggedIn === true) {
        console.log("authentication Passed")
      }
    }

    logOut(){
      this.setState({
        loggedIn: false,
      })
    }

    render() {
      {console.log(Component )}
      return (
        <div >
          <App
            // logOut={this.logOut}
          />
          <h1>Authentication!</h1>
        </div>
      );

    }
  };
export default Authenticate;
