import React from "react";

const Authenticate = (App, NotApp) =>
  class extends React.Component {
    // set up our state so that we have some conditional logging
    constructor(){
        super()
        this.state={loggedIn:false}
    }

    componentDidMount(){
        if(!localStorage.getItem('history')){
            this.setState({userpairs:[]})
        }
    }
    render() {
      // if user is logged in... render app
      if (!"logged in") {
        return <App />;
      } else {
        return <NotApp />;
      }
    }
  };

export default Authenticate;
