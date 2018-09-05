import React from 'react';
import Login from '../Login/Login';

const Authenticate = SecureComponent => class extends React.Component {
        constructor() {
            localStorage.user1 = JSON.stringify({username: "TheBrockstar", password: "1234"});
            if(!localStorage.isLoggedIn) {localStorage.isLoggedIn = false};
            super();
            this.state = {
                loggedIn: JSON.parse(localStorage.isLoggedIn),
                usernameField: "",
                passwordField: "",
            };
        }
        updateUsername = (e) => {
            this.setState({
            usernameField: e.currentTarget.value
            })
          }

          updatePassword = (e) => {
            this.setState({
            passwordField: e.currentTarget.value
            })
          }

         login = (e) => {
             e.preventDefault();
             if(this.state.usernameField === JSON.parse(localStorage.user1).username && this.state.passwordField === JSON.parse(localStorage.user1).password){
                this.setState({loggedIn:true});
                localStorage.isLoggedIn = true;
             } else {
                 alert("INVALID PASSWORD OR USERNAME");
             }
          }

        render() {
            if (this.state.loggedIn){
            return <SecureComponent/>;
            } else {
                return <Login 
                updateUsername={this.updateUsername} 
                updatePassword={this.updatePassword} 
                login={this.login}
                />
            }
    }   
 }



export default Authenticate;