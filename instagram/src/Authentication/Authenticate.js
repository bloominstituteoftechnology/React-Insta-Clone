import React from 'react'

//HOC

const Authenticate = App =>
  class extends React.Component {
    constructor() {
      super ();
      this.state = {
        loggedIn: true,
      }
    }


    render() {
      //if user is logged in, render app, else render a login component
      return <App />
    }
  }

  export default Authenticate