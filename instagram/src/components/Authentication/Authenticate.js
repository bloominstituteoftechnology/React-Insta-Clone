import React from 'react';
import Login from '../../components/Login/Login';


const Authenticate = App => class HOC extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            valid: false,
        } 
    }

    login = e => {
        if (this.state.username !== undefined) {
            this.setState({valid: true}) 
        }
        else {alert('invalid username')}
    } 

    changeHandler = (e) => {
        this.setState({username: e.target.value})
    }
    
    render() { 
        return (
        this.state.valid === true ? <App username={this.state.username}/> : <Login login={this.login} changer={this.changeHandler}/>
    )}
}

export default Authenticate;