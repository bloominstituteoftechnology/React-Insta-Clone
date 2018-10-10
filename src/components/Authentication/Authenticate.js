import React, { Component } from 'react';
import Login from '../Login/Login';

const Authenticate = (App) => class extends Component {
    constructor() {
        super();

        this.state = {
            loggedIn: false,
        }
    }

    login = () => {
        this.setState({
            loggedIn: true,
        })
    }

    // componentDidMount() {
    //    console.log(localStorage.getItem('loggedIn'))
    //    console.log(this.state)
    //     if(localStorage.getItem('loggedIn') === null) {
    //       this.setState({
    //         loggedIn: false
    //       })
    //     } else {
    //     this.setState({
    //       loggedIn: JSON.parse(localStorage.getItem('loggedIn'))
    //     })
    //   }
    // }

    render () {
        if (this.state.loggedIn === false ) {
            return (
                <Login login={this.login} />
            )
        } else {
            return <App />
        }
    }
};

export default Authenticate;