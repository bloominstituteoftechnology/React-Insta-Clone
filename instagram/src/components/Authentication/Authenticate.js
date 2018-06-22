import React from 'react';
import Login from '../Login/Login';

const Authenticate = App => 
    class extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
        username: '',
        password: '',
    }
    
    }

handleInputChange = (event) => {
    this.setState({[event.target.name]:event.target.value})
}
login = (event) => {
    event.preventDefault();
    console.log('attempting to login');
    window.localStorage.setItem('userLoggedIn', this.state.username);
    window.location.reload(true);
}
        
        render() {
            
            if (window.localStorage.userLoggedIn){
            return <App />
            }else {
                return <Login handleInputChange = {this.handleInputChange} login = {
                    this.login
                }
                />
            }
           
        }
    };

export default Authenticate;
