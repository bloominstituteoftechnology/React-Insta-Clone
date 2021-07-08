import React from 'react';
import Login from '../Login/Login';

const Authenticate = App => {
    class HOC extends React.Component {
        constructor() {
            super();
            this.state = {
                loggedIn: false
            }
        }

        componentDidMount() {
            if (!localStorage.getItem('user')) {
                this.setState({loggedIn: false});
            } else {
                this.setState({loggedIn: true});
            }
        }

        render() {
            if (this.state.loggedIn) {return <App />}
            return <Login />;
        }
    }

    return HOC;
}

export default Authenticate;