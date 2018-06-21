import React from 'react';
import Login from '../components/Login/Login';



const Authenticate = App => 
    class extends React.Component {
        constructor() {
            super();
            this.state = {
                loggedIn: false
            }
        }

        componentDidMount() {
            if (localStorage.getItem('username') && localStorage.getItem('password')) {
                this.setState({loggedIn: true})
            }
        }
        render() {
            if (this.state.loggedIn === true) {
                return <App />;
            } else {
                return <Login />;
            }
        }
    }


export default Authenticate;