import React from 'react';
import App from '../App.js';
import LoginPage from '../components/Login/Login.js';

const Authenticate = App =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedIn: false
            }
        }
        
        componentDidMount() {
         if (!localStorage.getItem('user')) {
             this.setState({ loggedIn: false });
         } else {
             this.setState({ loggedIn: true });
            }
        }

        render() {
         if (this.state.loggedIn) return <App />;
            return <LoginPage />;
            
        }
              
        
    };


export default Authenticate;