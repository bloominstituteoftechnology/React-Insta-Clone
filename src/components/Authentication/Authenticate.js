import React, { Component } from 'react';
import Login from '../Login/Login';

const Authenticate = App =>
  class extends React.Component {
      constructor(){
         super();
         this.state = {
             loggedIn: false
         }
      }
    render() {
        if(this.state.loggedIn === true){
            return (
                
                <div>
                    <App />
                </div>
                
            )
        }
        else {
            return (
            <div>
                <Login />
            </div>
            )
                
        }
      
    }
  };


export default Authenticate;