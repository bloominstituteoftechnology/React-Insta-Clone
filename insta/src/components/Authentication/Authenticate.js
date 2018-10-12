import React, { Component } from 'react';
import Login from '../Login/Login';

const Authenticate = App => class extends Component {
        constructor (props) {
            super(props);
            this.state = {
                username: '',
                loggedIn: ''
            }
        }

        componentDidMount() {
            const username = localStorage.getItem('username');
            const loggedIn = localStorage.getItem('loggedIn');

            this.setState({
                username: username,
                loggedIn: loggedIn
            });
        }

        login = (e) => {
            localStorage.setItem('username', e.target.elements.username.value);
            localStorage.setItem('loggedIn', 'true');
        }

        render() {
            console.log(`username is : ${this.state.username} and logged in is: ${this.state.loggedIn}`)
            return ( 
                <>
                    {
                        this.state.loggedIn === null ? (<Login login={this.login} />) : (<App />) 
                    }
                </>
            );
        }
    }


export default Authenticate;