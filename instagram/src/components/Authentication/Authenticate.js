import React, { Component } from 'react';
import LoginPage from './LoginPage';

const Authenticate = App =>
    class extends Component {
        constructor(props){
            super(props);
            this.state = {
                loggedIn: false
            };
        }
        

        componentDidMount() {
            if (!localStorage.getItem('user')) {
                this.setState({ loggedIn: false})
            } else {
                this.setState({ loggedIn: true})
            }
            }
        render() {
            if (this.state.loggedIn) return <App />; //if true, return the app, like a ternary func
            return <LoginPage /> //return that LoginPage, so we can get those credentials
        }
        };
    
export default Authenticate;
        
    