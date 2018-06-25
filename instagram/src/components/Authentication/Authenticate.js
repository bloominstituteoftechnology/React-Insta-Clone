import React from 'react';
import LoginPage from '../Login/LoginPage';

const Authenticate = App =>
    class extends React.Component { //doing React.Component makes it so your import doesn't have to be React {Component}
        constructor(props) {
            super(props);
            this.state = {
                loggedIn: false
            }
        };
        componentDidMount() {
                if (!localStorage.getItem('user')) { //when localStorage doesn't have user?
                this.setState({loggedIn: false});
            } else {
                this.setState({loggedIn: true});
            }
        }

    render() {
        if (this.state.loggedIn) return <App />; //if loggedIn is true, then display App 
        return <LoginPage /> //otherwise, display LoginPage
    }
}
    
    export default Authenticate;