import React from 'react';
import Login from '../Login/Login'


const Authenticate = App => {
    class extends React.Component {
        constructor(props){
            super(props)
            this.state = {
                loggedIn:false
            }
        }
        componentDidMount() {
            if (localStorage.getItem('username')){
                this.setState({loggedIn: true})
            }
            else {
                this.setState({loggedIn: flase})
            }
        }
        componentWillMount(event){
            if (this.setState({loggedIn: true}))
            event.preventDefault()
            this.setState({loggedIn: false})
            window.location.reload()
        }
        render() {
            if (this.state.loggedIn)
            return <App/>
            else {
                <Login/>
            }
        }
    }
}

export default Authenticate;