import React, { Component } from 'react';
import App from '../../App.js';
import Login from '../Login/Login.js'
import PostsPage from '../PostContainer/PostsPage.js'

const Authenticate = App =>  
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedIn: false
            }
        }


        componentDidMount() {
            if (localStorage.getItem('username') === null) {
                this.setState({
                    loggedIn: false
                })
            }
            else {
                this.setState({
                    loggedIn: true
                })
            }
        }

        render() {
            if (this.state.loggedIn === true) {
                return (<App />)
            }
            else {
                return (<Login />)
            }
        }
    }

export default Authenticate;