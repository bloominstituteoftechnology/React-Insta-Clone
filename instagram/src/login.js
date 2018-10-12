import React, { Component } from 'react';

class Login extends Component{
constructor(props){
    super(props);
    this.state={
        username:'',
        password:'',
    }
}
LoginInput=e=>{
    this.setState({[e.target.name]: e.target.value});
};
SubmitInput=e=>{
    const user=this.state.username;
    localStorage.setItem('user',user);
    window.location.reload();
}
render(){
    return(
        <form>
            <input
            className='login-input'
            type='text'
            placeholder='username'
            name='username'
            onChange={this.LoginInput}
            value={this.state.username}
            />
            <button className='login-button' onClick={this.SubmitInput}>
            login
            </button>
        </form>
    );
}
}

export default Login;