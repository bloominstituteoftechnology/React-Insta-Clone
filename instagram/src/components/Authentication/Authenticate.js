import React from 'react';
import Login from '../Login/Login';
import userData from '../../user-data';
const Authenticate = App =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isLoggedIn: false
            };
        }
        componentDidMount() {
            if (localStorage.getItem('username') === userData['username'] && 
            localStorage.getItem('password') === userData['password']) {
                this.setState({ isLoggedIn: true });
            }
            else {
                // alert(`This is not a very secure website so... here is the username and password to save you all the trouble!\n Username: ${userData['username']} \nPassword: ${userData['password']}`);
                this.setState({ isLoggedIn: false });
            }
        }

        render() {
            if (this.state.isLoggedIn === true) {
                return <App />;
            }
            else {
               
                return <Login />;
            }
        }
    }
export default Authenticate;