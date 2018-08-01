import React from 'react';
import Login from '../login/login';

let Authenticate = App =>
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
    window.localStorage.setItem('username', this.state.username);
    window.location.reload(true);
}

    render() {
        if (window.localStorage.username) {
            return <App />
        }else {
            return <Login handleInputChange = {this.handleInputChange} login = {
                this.login
            }
            />
        }
    }

}

export default Authenticate;