import React from "react";
import Login from "../components/Login/Login";

const Authenticate = App =>
  class extends React.Component {
    // set up our state so that we have some conditional logging
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        };
    }

    componentDidMount() {
        // runs after render() 
        // check if user exists in localstorage
        // if it does, set state to true, if it doesnt set state to false 
    }

    render(){
        // if user is logged in... render app
        // else render a login comonent.
        if(this.state.loggedIn === true){
            return <App />;
        } else {
            return <Login />;
        }
    }
        
}


  export default Authenticate;