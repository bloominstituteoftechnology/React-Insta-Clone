import React from 'react';
import LoginPage from './Login/Login';

const Authenticate= Page => 
    class extends React.Component {
        constructor() {
            super();
            this.state = {loggedIn: false, userIn: ""}
        }

        componentDidMount () {
            const username = localStorage.getItem('username');
            const password = localStorage.getItem('password');
            console.log(username, "username")
            if(username && password) {
                this.setState({loggedIn: true, userIn: username});
            }
        }

        render() {

            return (
                //is user logged  ? yes then produce the normal App page content.  no? make them login with the loginPage
                this.state.loggedIn ? 
                <Page userIn={this.state.userIn}/> 
                :
                <LoginPage />
                
            )
        }
}

export default Authenticate; 