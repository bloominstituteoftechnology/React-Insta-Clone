import React from 'react';
import LoginPage from '../LoginPage/LoginPage';


const Authenticate = App => {
    return class extends React.Component {
        constructor() {
            super();

            this.state = {
                loggedIn: false,
            }
        }

        componentDidMount() {
            const storedUser = JSON.parse(localStorage.getItem('username'));

            if (storedUser){
                this.setState({ loggedIn: true})
            }
        }
        
        render() {
            if (this.state.loggedIn) {
                return <App />
            } else {
                return <LoginPage />
            }
        }
    }
}

export default Authenticate;