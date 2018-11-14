import React from 'react';
import Login from '../Login/Login';

const Authenticate = App =>
    class extends React.Component {
        render() {
            if(!this.props.isLoggedIn){
                return <Login logIn={this.props.login} 
                userInputChange={this.props.userInputChange} userInput={this.props.userInput} />
            }
            else {
                return <App {...this.props} />
            }  
        }
    };

export default Authenticate;
