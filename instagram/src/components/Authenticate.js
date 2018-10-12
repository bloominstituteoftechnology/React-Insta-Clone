import React from "react";

const Authenticate = (App, NotApp) =>
  class extends React.Component {
    // set up our state so that we have some conditional logging
    constructor(){
        super()
        this.state={loggedIn:false}
    }

    componentDidMount() {
        if (localStorage.getItem('user')) {
          this.setState({ loggedIn: false });
        } else {
          this.setState({ loggedIn: true });
        }
      }
    render() {
      // if user is logged in... render app
      if (!this.state.loggedIn) {
        return <App />;
      } else {
        return <NotApp />;
      }
    }
  };

export default Authenticate;
