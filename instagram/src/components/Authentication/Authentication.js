import React from 'react';
// import Login from './components/Login/Login.js';

const Authenticate = Component =>
  class extends React.Component {
    constructor(){
      super();
      this.state = {
        user: true,
      };
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
