import React, { Component } from 'react';
import Login from '../Login/Login';

const Authenticate = App =>
  class extends React.Component {
      constructor(props){
         super(props);
         this.state = {
             loggedIn: false  
         }
      }

    
        componentDidMount(){
            if(!localStorage.getItem('user')){
                
              this.setState= ({
                  loggedIn: false
                });
            }
            else {
                
                this.setState = ({
                    loggedIn: true
                },() => {console.log(this.state)})
            }
        }

        render() {
            if(this.state.loggedIn){
                console.log("im logged in")
                return (
                <div>
                    <App />
                </div>
            )
        }
            else {
                console.log("i am not logged in")
                return (
                   
                <div>
                    <Login />
                </div>
            )    
        }
      
    }
  };


export default Authenticate;