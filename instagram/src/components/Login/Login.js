import React from 'react'


class Login extends React.Component {
    constructor(){
        super()
        this.state = {
            user: '',
            pw: ''
        }
    }
    LoginSubmit = event => {
        this.setState({
            [event.target.user]: event.target.value
        })
    }
    LoginUser = event => {
        const user = this.state.username
        localStorage.setItem('user', user)
        this.setState({
            user: event.target.value
        })
        window.location.reload();
    }
    render(){
        return(
        <div>
        <input value={this.state.user}
            onChange={this.LoginUser}
        />
    
        <input value={this.state.pw} onChange={this.LoginUser}/>
        </div>
        )
    }
    
}

export default Login 