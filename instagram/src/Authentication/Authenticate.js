import React from 'react';


const Authenticate = App =>
class extends React.Component {

  render() {
    return <App />;
  }
};

export default Authenticate;

//Initialize false so they revert to login page.
//check local storage
//Check if user is in local storage
//change to true
//go to app.js