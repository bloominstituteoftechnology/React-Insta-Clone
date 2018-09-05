import React from 'react';
import Login from '../Login/Login';

const Authenticate = App =>
    class extends React.Component {
        // sets the state authorized: false by default
        state = {
            authorized: false,
            username: ''
        }

        // on load, checks to see if there is a username & password in localStorage
        componentDidMount() {
            if(localStorage.getItem('username') && localStorage.getItem('password')){
                // if there is, set authorized to true and store the current username in state
                this.setState({
                    authorized: true,
                    username: localStorage.getItem('username')
                });
            } else {
                this.setState({
                    authorized: false
                })
            }
        }

        render(){
            // conditionally return App if authorized is true
            if(this.state.authorized){
                return (
                <App />
                );
            } else {
                return (
                    <Login />
                )
            }
        }
        }

    export default Authenticate;