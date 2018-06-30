import React from 'react';
import Login from '../Login/Login';

const Authenticate = App =>
    class extends React.Component {
        constructor() {
            super();
            this.state = {
                userLoggedIn: false,
            };
        }

        componentDidMount() {
            if (localStorage.getItem('username')) {
                this.setState({userLoggedIn: true});
            } else {
                this.setState({userLoggedIn: false});
            }
        }

        render() {
            if (this.state.userLoggedIn === true) {
                return <App />;
            } else {
                return <Login/>;
            }
        }
    } 

 
export default Authenticate;