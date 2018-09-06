import React from 'react';
import Login from '../Login/Login';

const Authenticate = App =>
  class extends React.Component {
      constructor(){
         super();
         this.state= {
             loggedIn: false  
         };
      };

    
        componentDidMount(){
            if(!localStorage.getItem('user')){
                this.setState({
                  loggedIn: false
                });
            }
            else {
                 this.setState({
                    loggedIn: true
                });
            };
        };

        render() {
            if(this.state.loggedIn === true){
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