import React from 'react';
import Login from '../Login/Login';

const Authenticate = (App) =>
    class extends React.Component {
        constructor(props){
            super(props);
            this.state = {loggedIn: false, currentUser: ''}
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