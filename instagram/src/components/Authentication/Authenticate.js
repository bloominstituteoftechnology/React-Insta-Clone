import React, { Component } from 'react';
// import LoginPage from '../Login/Login'

const Authenticate = App => 

class extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn:false
        }
    }
    componentDidMount(){
        //check if user exists in local toare
        // if it does set state to true, if not set to false
    }

    render() {

        return <App />
        // if(this.state.loggedIn) return <App />;
        // return <LoginPage />
    }
}

export default Authenticate;