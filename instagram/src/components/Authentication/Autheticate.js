import React from 'react';
import Login from '../Login/Login';

const Authenticate = App =>
    class extends React.Component{
        constructor(props){
            super(props);
            this.state ={
                user: '',
                loggedIn: false
            }
        }
        currentUser = e => {
            this.setState({user: e.target.value});
        }
        loggedInUser = () => {
            this.setState((prevState)=>{
                return {
                    loggedIn: !prevState.loggedIn
                }
            })
        }
        loginUser = e => {
            localStorage.setItem('username', this.state.user)
          }
        render(){
            if(this.state.loggedIn){
                return <App />
            }
            else {
                return(
                    <Login login={this.loginUser} username={this.currentUser}/>
                )
            }
        }
    }

export default Authenticate;