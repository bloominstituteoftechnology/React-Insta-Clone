import React from 'react';
import Login from '../Login/Login';

const Authenticate = (App) =>
    class extends React.Component {
        constructor(props){
            super(props);
            this.state = {loggedIn: false, currentUser: ''}
        }

        componentDidMount(){
            let loggedInCheck = JSON.parse(localStorage.getItem('loggedIn'));
            if (loggedInCheck){
                let usernameCheck = JSON.parse(localStorage.getItem('username'));
                this.setState({loggedIn: true, currentUser: usernameCheck});
            }
        }

        storeUser = (event) => {
            this.setState({currentUser: event.target.value});
        }

        loginUser = () => {
            this.setState((prevState) => {
                return {
                    loggedIn: !prevState.loggedIn
                }
            });
            localStorage.setItem('loggedIn', JSON.stringify(true));
            localStorage.setItem('username', JSON.stringify(this.state.currentUser));
        }

        render() {
            if (this.state.loggedIn){
                return <App currentUser={this.state.currentUser} />;
            }
            else {
                return <Login login={this.loginUser} storeUser={this.storeUser} userValue={this.state.currentUser} />;
            }
        }
    };

export default Authenticate;