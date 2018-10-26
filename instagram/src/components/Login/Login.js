import React from 'react'


class Login extends React.Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }
    LoginSubmit = () => {
     if(this.state.username && this.state.password){
         localStorage.setItem("user", this.state.username)
         localStorage.setItem("password", this.state.password)    
         window.location.reload();
        }
        }
    LoginHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render(){
        return(
            <div>
            <form onSubmit={this.LoginSubmit} >
                <input name="username" value={this.state.username} onChange={this.LoginHandler} />
                <input name="password" value={this.state.password} onChange={this.LoginHandler} />
                <button type="submit" >Submit</button>
            </form>
           
            </div>
            )
    }
}

export default Login 