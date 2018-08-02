import React from 'react';
import styled from 'styled-components';

const LoginForm=styled.form`
    width: 50%;
    margin: 0 auto;
    margin-top: 30px;
`
const LoginBtn=styled.button`
    margin-top: 10px;
`
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
        <LoginForm onSubmit={this.logIn}>
            <input type='text' name='username' placeholder='enter a username' value={this.state.username} onChange={(e)=>this.handleUserNameChange(e)}/>
            <input type='password' name='password' placeholder='enter a password' value={this.state.password} onChange={(e)=>this.handlePassWordChange(e)}/>
            <LoginBtn className='btn waves-effect waves-light'>Login</LoginBtn>
        </LoginForm>
    )
}
}        
    


    
export default Login;