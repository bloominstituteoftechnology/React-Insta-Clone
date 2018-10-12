import React from 'react';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        }
    }
    userinputHandler = (event) => {
        const value = event.target.value;
        this.setState({
            username: event.target.value,
        })
    }
    pwinputHandler = (event) => {
        const value = event.target.value;
        this.setState({
           password: event.target.value,
        })
    }
    render(){
        return(
            <form>
            <input placeholder='username' onChange={this.userinputHandler} value={this.state.username}>  </input>
            <input value={this.state.password} onChange={this.pwinputHandler}></input>
            <button>Login</button>
            </form>
        )
    }
}

export default Login;