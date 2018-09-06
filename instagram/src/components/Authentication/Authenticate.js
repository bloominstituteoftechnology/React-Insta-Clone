import React from 'react';
import Login from '../Login/Login';

const Authenticate = SecureComponent => class extends React.Component {
        constructor() {
            localStorage.users = JSON.stringify([{username: "theBrockstar", password: "1234"}, {username: "broccoli", password: "1234"}]);
            localStorage.user1 = JSON.stringify({username: "theBrockstar", password: "1234"});
            if(!localStorage.isLoggedIn) {localStorage.isLoggedIn = false};
            super();
            this.state = {
                loggedIn: JSON.parse(localStorage.isLoggedIn),
                usernameField: "",
                passwordField: "",
                users: JSON.parse(localStorage.users)
            };
        }
        updateUsername = (e) => {
            this.setState({
            usernameField: e.currentTarget.value
            })
            if (e.currentTarget.value) {
                e.currentTarget.parentElement.classList.add('input-active');
            } else {
                e.currentTarget.parentElement.classList.remove('input-active'); 
            }
          }

          updatePassword = (e) => {
            this.setState({
            passwordField: e.currentTarget.value
            })
            if (e.currentTarget.value) {
                e.currentTarget.parentElement.classList.add('input-active');
            }
            else {
                e.currentTarget.parentElement.classList.remove('input-active');
            }
          }

          disableLoginButton = (e) => {
              if (e.currentTarget.value) {
                e.currentTarget.parentElement.parentElement.querySelector('button').classList.add('can-login');
                e.currentTarget.parentElement.parentElement.querySelector('button').disabled = false;
              } else {
                e.currentTarget.parentElement.parentElement.querySelector('button').classList.remove('can-login');
                e.currentTarget.parentElement.parentElement.querySelector('button').disabled = true;
              }
          }

          login = (e) => {
            e.preventDefault();
            let currentUser = JSON.parse(localStorage.users).filter(user => 
            (user.username.toLowerCase() === this.state.usernameField.toLowerCase() && user.password === this.state.passwordField));
            if(currentUser.length >= 1){
               this.setState({loggedIn:true});
               localStorage.isLoggedIn = true;
            } else {
               alert("Your Password or Username is Incorrect.");
            }
            localStorage.currentUser = JSON.stringify(currentUser[0]);
         }


        //  login2 = (e) => {
        //      e.preventDefault();
        //      if(this.state.usernameField.toLowerCase() === JSON.parse(localStorage.user1).username.toLowerCase() && this.state.passwordField === JSON.parse(localStorage.user1).password){
        //         this.setState({loggedIn:true});
        //         localStorage.isLoggedIn = true;
        //      } else {
        //          alert("INVALID PASSWORD OR USERNAME");
        //      }
        //   }

        render() {
            if (this.state.loggedIn){
            return <SecureComponent/>;
            } else {
                return <Login 
                updateUsername={this.updateUsername} 
                updatePassword={this.updatePassword} 
                disableLoginButton={this.disableLoginButton} 
                login={this.login}
                />
            }
    }   
 }



export default Authenticate;