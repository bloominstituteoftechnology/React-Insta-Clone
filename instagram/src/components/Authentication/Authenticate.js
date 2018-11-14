import React from 'react';
import LoginPage from '../LoginPage/LoginPage';


const Authenticate = App => {
    return class extends React.Component {
        constructor(){
            super();
            this.state = {
                loggedIn : undefined, 
                loginUserText: '',
                loginPasswordText: ''
            }
        }
    
        login(username, password) {
            localStorage.setItem('user', username)
            localStorage.setItem('password', password)
        }

        handleInputChange = event => {
            this.setState({
              [event.target.name]: event.target.value,
            });
        };

        componentDidMount(){
            let loginStatus = false; 

            if (localStorage.getItem('user') === 'FRANK'){
                
                loginStatus = true;
            } else {
                loginStatus = false;
            }   

            this.setState({
                loggedIn : loginStatus,
            })
        }

        render() {
            if(this.state.loggedIn) {
                return <App />;
            } else {
                return <LoginPage 
                login={this.login}
                loginUserText={this.state.loginUserText}
                loginPasswordText={this.state.loginPasswordText}
                handleInputChange={this.handleInputChange}
              />
            }
            
        }
    }
}

export default Authenticate;