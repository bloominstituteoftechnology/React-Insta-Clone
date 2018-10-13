import React from 'react';
import Login from '../Login/Login'

const Authenticate = Component => {
    return class WrappedComponent extends React.Component {

        state = {
            loggedIn: false,
        }

        componentDidMount() {
            if (!localStorage.getItem('username')) {
                this.setState({ loggedIn: false });
            } else {
                this.setState({ loggedIn: true });
            }
        }

        render() {
            return this.state.loggedIn ? <Component /> : <Login />;
        }
    }
};

export default Authenticate;