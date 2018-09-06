import React from 'react';
import './login.css';

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            username: '',
            password: ''
            
        }
    }
handleUserNameChange=(e)=> {
    this.setState({[e.target.name]:e.target.value},()=>console.log(this.state.username));
}
handlePassWordChange=(e)=>{
    this.setState({[e.target.name]:e.target.value},()=>console.log(this.state.password));
}
logIn=()=>{
    localStorage.setItem('username',this.state.username);
    localStorage.setItem('password',this.state.password);
}
render () {
    return (
        <form className='login' onSubmit={this.login}>
            <input type='text' name ='username' placeholder='enter a username' value={this.state.username} onChange={(e)=>this.handleUserNameChange(e)}/>
            <input type='password' name = 'password' placeholder='enter a password' value={this.state.password} onChange={(e)=>this.handlePassWordChange(e)}/>
            <button className='btn'>Login</button>
        </form>
    )
}
}
export default Login;