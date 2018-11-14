import React from 'react';
import Login from '../Login/Login';

const Authenticate = App =>
    class extends React.Component {
        render() {
            if(this.props.userName === ''){
                return <Login logIn={this.props.login} 
                userInputChange={this.props.userInputChange} userInput={this.props.userInput} />
            }
            else {
                console.log(this.props.userName)
                return <App />
            }  
        }
    };

export default Authenticate;
