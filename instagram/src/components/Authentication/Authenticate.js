import React from 'react';
import LoginPage from '../Login/Login';
const Authenticate = App =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isLoggedIn: false
            };
        }
        componentDidMount() {
            if (sessionStorage.getItem('username') === 'skid' && 
            sessionStorage.getItem('password') === 'dragon') {
                this.setState({ isLoggedIn: true });
            }
            else {
                this.setState({ isLoggedIn: false });
            }
        }

        render() {
            if (this.state.isLoggedIn === true) {
                return <App />;
            }
            else {
                return <LoginPage />;
            }
        }
    }
export default Authenticate;