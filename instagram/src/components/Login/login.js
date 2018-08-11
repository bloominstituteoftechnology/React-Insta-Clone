import React from 'react';
import styled from 'styled-components';

const LoginForm=styled.form`
    width: 390px;
    margin: 0 auto;
    margin-top: 30px;
`
const LoginBtn=styled.button`
    margin-top: 10px;
`

const ImgContainer=styled.div`
    width: 390px;
    height: 130px;
    background-image: url('http://style-matters.com/blog/wp-content/uploads/2013/01/Instagram_Logo_Large.png');
    background-size: 100%100%;
`
class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            username: '',
            password:''
        }
    }
handleInputChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
}
logIn=()=>{
    if (this.state.username.length>=1 && this.state.password.length>=1) {
    localStorage.setItem('username',this.state.username);
    }
}
render () {
    return (
        <LoginForm onSubmit={this.logIn}>
            <ImgContainer></ImgContainer>
            <input type='text' name='username' placeholder='enter a username' value={this.state.username} onChange={this.handleInputChange}/>
            <input type='password' name='password' placeholder='enter a password' value={this.state.password} onChange={this.handleInputChange}/>
            <LoginBtn className='btn waves-effect waves-light'>Login</LoginBtn>
        </LoginForm>
    )
}
}        
    


    
export default Login;