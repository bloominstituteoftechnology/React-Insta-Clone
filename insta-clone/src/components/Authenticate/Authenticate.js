import React  from 'react'
import Login from '../Login/Login'
const Authenticate = App =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedIn: false
            };
        }
        componentDidMount = () => {
            const userName = localStorage.getItem('username')
            if (userName) {
                this.setState({ logedIn: true })
            } else {
                this.setState({loggedIn:false})
            }
        }


        render() {

            if (this.state.loggedIn) {
                return <App />

            } else {
                return <Login />
            }


        }
    }
export default Authenticate
