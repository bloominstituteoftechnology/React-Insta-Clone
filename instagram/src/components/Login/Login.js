import React from 'react'
import styled from 'styled-components';
import './Login.scss'
import {Input} from "../Styles/Reusables/Input";
import {Button} from "../Styles/Reusables/Button";

const LoginForm = styled.form`
   display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 500px;
    background-color: #FAFAFA;
    border-color: #999999;
    margin: 20px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3), 0 25px 50px 0 rgba(0, 0, 0, 0.30);
`;

const LoginH1 = styled.h1`
	color: #444;
`

const ButtonBar = styled.div`
	 margin: 20px;
	 padding: 10px 20px;
	 width: 100%;
`

const LoginButton = styled(Button)`
  	 background-color: #d1ecf1;
  	 border-radius: 4px;
  	 font-size: 1.6rem;
  	 padding: 10px 40px;
  	 border: 1px solid #bee5eb;
  	 color:#0c5460
  	 margin: 0 4px;
`


class Login extends React.Component {
	constructor(){
		super()
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
			<LoginForm className="loginContainer" onSubmit={e=> this.onLogin(e)}>
				<LoginH1>Please Login</LoginH1>
				<Input
					type="text"
					className="usernameInput"
					placeholder="Username"
					name="username"
					value={this.state.username}
					onChange={e=> this.onHandleInputChange(e)}/>
				<Input
					type="text"
					className="passwordInput"
					name="password"
					placeholder="Password"
					value={this.state.password}
					onChange={e=> this.onHandleInputChange(e)}/>
				<ButtonBar className="buttonBar">
					<LoginButton  type="submit"  variant="contained" color="primary">Login</LoginButton>
					<LoginButton onClick={this.onClear}  variant="contained" color="primary">Reset</LoginButton>
				</ButtonBar>
				<p>{this.props.loginError && this.props.loginError.messsage}</p>
			</LoginForm>
		)
	}
}
export default Login
