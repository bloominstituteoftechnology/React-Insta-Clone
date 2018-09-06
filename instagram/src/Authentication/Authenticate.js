import React from 'react';
import App from '../App.js';
import Login from '../components/Login/Login.js';

const Authenticate = App =>
    class extends React.Component {
        constructor() {
            super();
            this.state = {
                loggedIn: false
            }
        }
        
        componentDidMount() {
         if (localStorage.getItem('user')) {
             this.setState({ loggedIn: true });
         } else {
             this.setState({ loggedIn: false });
            }
        }

        render() {
          //  return <App />;
            //check if a user is logged in
            //if loggedIn: true, return <App />
            //if loggedIn: false, return <LoginPage>

        
            this.state.loggedIn ? <App /> : <Login />;
        }
              
        
    };


export default Authenticate;