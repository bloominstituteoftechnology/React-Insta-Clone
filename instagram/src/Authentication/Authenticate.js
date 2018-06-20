import React from 'react';
import LoginPage from '../components/Login/LoginPage';

const Authenticate = App => 
    class extends React.Component {
        constructor() {
            super();
            this.state = {
                loggedIn: false
            }
        }

        componentDidMount() {
            if (window.localStorage.getItem('username')) {
                this.setState({loggedIn: true});
                this.forceUpdate();
            }
        }

        render() {
            if (this.state.loggedIn) {
                return <App />
            }
            else return <LoginPage />
        }
    }


export default Authenticate;