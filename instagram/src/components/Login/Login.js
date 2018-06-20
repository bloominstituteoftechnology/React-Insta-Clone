import React from 'react';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
	    username:"",
	    password:""
    };
  }


Login =(event) =>{
	event.preventDefault();
	const username = this.state.username;
	localStorage.setItem('username',username)		
	window.location.reload();
}


onChangeHandlerUser = event =>{
	event.preventDefault();
	this.setState({username: event.target.value});

}

onChangeHandlerPassword = event =>{
        event.preventDefault();
        this.setState({password: event.target.value});

}

	
render(){
	return(

		<div className="form-container">
		<form>
	<input  className="input-style"type="text" onChange ={this.onChangeHandlerUser} placeholder="username" value={this.state.username}/>

	<input  className="input-style" type="password" onChange ={this.onChangeHandlerPassword} placeholder="password" value={this.state.password}/>
		
	<button className="button-style" onClick={this.Login}>Login</button>
		</form>
		</div>
	
	);



}

}


export default Login;
