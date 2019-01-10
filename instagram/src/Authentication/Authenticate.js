import React from 'react';
import Login from '../components/Login/Login';

const Authenticate = App => 
    class extends React.Component {
        constructor() {
            super();
            this.state = {
                loggedIn: false,
                user: ''
            }
        }
        login = (username) => {
            localStorage.setItem('username', username.username);
            this.setState({user: username.username, loggedIn: true})
        }
        componentDidMount() {
            if (localStorage.getItem('username')) {
                this.setState({loggedIn: true});
            }
        }
        render() {
            let local = localStorage.getItem('username');
            if (this.state.loggedIn === true) {
                return <App />
            }
            else {
                return (
                    <Login login={this.login}/>
                )
            }
        }
    }

export default Authenticate;