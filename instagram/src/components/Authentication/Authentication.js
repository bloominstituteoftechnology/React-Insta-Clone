import React from 'react';
// import Login from './components/Login/Login.js';
// import App from './App';


const Authenticate = Component =>
  class extends React.Component {
    constructor(){
      super();
      this.state = {
        loggedIn: false,
      };
    }


    componentDidMount(){
      if (this.state.loggedIn === true) {
        console.log("authentication Passed")
      }
    }


    render() {
      {console.log(Component )}
      return (
        <div >
          <Component />
          <h1>Authentication!</h1>
        </div>
      );

    }
  };
export default Authenticate;
