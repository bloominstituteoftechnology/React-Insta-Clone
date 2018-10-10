import React from 'react'
import Login from '../Login/Login';
const Authenticate = PassedComponent => {
    return class WrappedComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                Logged: false,
            };
        }
        componentDidMount() {
            if (localStorage.getItem('Username') !== null) {
                this.setState({
                    Logged: true,
                })
            } else {
                this.setState({
                    Logged: false,
                })
            }

        }
        render() {
            if (this.state.Logged === false) {
                return <Login />
            } else {
                return <PassedComponent />
            }

        }
    };
}

export default Authenticate