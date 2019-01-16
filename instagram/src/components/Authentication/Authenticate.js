import React from 'react';
import Login from '../../components/Login/Login';


const Authenticate = App => class HOC extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            valid: false
        } 
    }

    login = e => {
        this.setState({
          username: e.target.value,
          valid: true
        })
        localStorage.setItem('username', `${this.state.username}`)
    } 

    render() { 
        return (
        this.state.valid === true ? <App/> : <Login login={this.login}/>
    )}
}

export default Authenticate;