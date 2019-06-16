import React, { Component } from 'react';
import PropTypes from 'prop-types';


import App from './../App';
import Login from './../components/Login/Login';


const authenticate = App => LoginBlahBlah =>
  class extends React.Component {
    constructor(){
        super();

        this.state = {
            loggedIn: null
        }
    }

    componentDidMount() {
        if (localStorage.getItem("user")){
        this.setState(
            {
                loggedIn: true
            }

        )
        }
        else {
            this.setState(
                {
                    loggedIn: false
                }
    
            )
        }    
    }

    

    logInThing3 = () => {
        if(this.state.loggedIn === false){
            return <LoginBlahBlah />
        }
        else{
            return <App />
        }
    }

    render() {
      return this.logInThing3();
      
    }
  };

  export default authenticate;

  