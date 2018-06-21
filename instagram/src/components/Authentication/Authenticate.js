import React from 'react';
import LoginPage from '../Login/Login';

const Authenticate = App => class extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false,
            username: 'stormer'
        }
    }

    componentDidMount = () => {
        if (localStorage.getItem(this.state.username)) {
            this.setState({loggedIn: true})
        } else {
            this.setState({loggedIn: false})
        }
    }

    render() {
        if (this.state.loggedIn) {
            return (
                <App username={this.state.username}/>
            )
        } else {
            return (
                <LoginPage />
            )
        }
    };
};

export default Authenticate;