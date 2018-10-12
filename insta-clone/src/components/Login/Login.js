import React from 'react'


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        } 
    }

    componentDidMount(){
        
    }

    userChangeHandler = event => {
        this.setState({
            username: event.target.value,
        })
    }

    pwChangeHandler = event => {
        this.setState({
            password: event.target.value,
        })
    }

    submitHandler = event => {

    }

    render(){
        return(
            <form>
                <input placeholder="username" onChange={this.userChangeHandler} value={this.state.username}></input>
                <input placeholder="password" value={this.state.password} onChange={this.pwChangeHandler}></input>
                <button>Login</button>
            </form>
        )
    }
}


export default Login;