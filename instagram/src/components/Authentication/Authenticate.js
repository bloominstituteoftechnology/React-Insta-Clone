import React, {Component} from 'react';
import Login from '../Login/Login';

const Authenticate = (WrappedComponent) => {


    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                username: '',
            }
        }

        setUsername = (username) => {
            this.setState({
                ...this.state,
                username: username
            })
        }

        logOut() {
            window.localStorage.removeItem('username');
            window.location.reload();
          }

        render() {
            return (window.localStorage.getItem('username')) ?
                (
                    <WrappedComponent logOut={this.logOut} />
                ) :
                (
                    <Login />
                )
        }
    }
}

export default Authenticate;