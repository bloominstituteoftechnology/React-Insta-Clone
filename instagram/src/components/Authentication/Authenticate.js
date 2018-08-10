import React from 'react';
import Login from '../Login/Login'

const Authenticate = App => 
    class extends React.Component {
        constructor (props) {
            super(props);
            this.state = {
                loginStatus: false,
            }
        }

        componentDidMount() {
            console.log(this.state.loginStatus);
            if (!localStorage.getItem('user')) {
                this.setState({loginStatus: false})
            }
            else {
                this.setState({loginStatus: true})
            }
            localStorage.removeItem('user')
        }

        // componentWillUnmount() {
        //     if(this.localStorage.getItem('user')) {
        //         localStorage.removeItem('user')
        //     }

        // }
//Add a localStorage.remove
        render() {
            if (this.state.loginStatus) return <App />
            return <Login />
        }
    }

export default Authenticate;