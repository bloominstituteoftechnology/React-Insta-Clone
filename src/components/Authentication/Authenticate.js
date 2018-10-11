import React, { Component } from 'react';
import Login from '../Login/Login';

const Authenticate = (App) => class extends Component {
    constructor() {
        super();

        this.state = {
            loggedIn: false,
        }
    }

    // login = () => {
    //     this.setState({
    //         loggedIn: true,
    //     })
    // }

    componentDidMount() {
        if(!localStorage.getItem('user')) {
          this.setState({
            loggedIn: false
          })
        } else {
        this.setState({
          loggedIn: true
        })
      }
    }

    render () {
        if (this.state.loggedIn === false ) {
            return (
                <Login />
            )
        } else {
            return <App />
        }
    }
};

export default Authenticate;