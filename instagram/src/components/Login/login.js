import React from 'react';
import './login.css';
class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            username: '',
            password:''
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
}
render () {
    return (
        <form className='login' onSubmit={this.logIn}>
            <input type='text' name='username' placeholder='enter a username' value={this.state.username} onChange={(e)=>this.handleUserNameChange(e)}/>
            <input type='password' name='password' placeholder='enter a password' value={this.state.password} onChange={(e)=>this.handlePassWordChange(e)}/>
            <button className='btn waves-effect waves-light'>Login</button>
        </form>
    )
}
}        
    


    
export default Login;