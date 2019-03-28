import React from 'react'
import styled from 'styled-components';
import moment from 'moment'
import './Login.scss'


const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 3em;
  margin: 1rem;
  padding: 1rem;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

class Login extends React.Component {
	constructor(props){
		super(props)
		this.state={
			username:'',
			password:'',
			loginError:''
		}
	}

	componentDidMount() {
		const username = JSON.parse(localStorage.getItem('username'))
		const password = JSON.parse(localStorage.getItem('password'))
		if(username){
			this.setState({'username': username})
		}
		if(password){
			this.setState({'password': password})
		}
	}
	
	onHandleInputChange = (e)=>{
		this.setState({[e.target.name]: e.target.value})
		localStorage.setItem([e.target.name],  JSON.stringify(e.target.value))
	}
	
	onLogin = (e)=>{
		e.preventDefault();
		let username = this.state.username.trim()
		let password = this.state.password.trim()
		
		this.props.onLogin(username, password)
		localStorage.setItem('username',  JSON.stringify(username))
		localStorage.setItem('password',  JSON.stringify(password))
		this.onClear();
	}
	
	onClear = (e)=>{
		this.setState({'username': ''})
		this.setState({'password': ''})
	}
	
	render(){
		return(
			<form className="loginContainer" onSubmit={e=> this.onLogin(e)}>
				<h1>Please Login</h1>
				<input
					type="text"
					className="usernameInput"
					placeholder="Username"
					name="username"
					value={this.state.username}
					onChange={e=> this.onHandleInputChange(e)}/>
				<input
					type="text"
					className="passwordInput"
					name="password"
					placeholder="Password"
					value={this.state.password}
					onChange={e=> this.onHandleInputChange(e)}/>
				<div className="buttonBar">
					<Button type="submit" primary>Login</Button>
					<Button onClick={this.onClear}>Reset</Button>
				</div>
				<p>{this.props.loginError && this.props.loginError.messsage}</p>
			</form>
		)
	}
}
export default Login
