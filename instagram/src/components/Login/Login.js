import React from 'react';

import styled from 'styled-components';

const LoginDiv = styled.div`
	border: solid black 1px;
	height: 300px;
	margin-top: 50px;
	background-color: #deecf2;
	border-radius: 10px;
	border: solid #a3cbcd 4px;
	> form {
		display: flex;
	  flex-direction: column;
	  max-width: 250px;
	  width: 100%;
	  margin: 54px auto;
	  padding: 6%;
	  background-color: #84d1e1;
	  border-radius: 10px;
	  border: solid #197e83 3px
	}
	> form > input {
		font-size: 1.6rem;
		padding: 1%;
		margin: 10px 0;
		border: solid #707072 1px;
	}
	> form > button {
		font-size: 1.6rem;
		border: solid #707072 1px;
		&:hover{
			background-color:black;
			color: white;
		}
	}
`

class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			login: '',
		};
	}

	loginHandler = event => {
		this.setState({[event.target.name]: event.target.value})
	}

	login = event => {
		localStorage.setItem(this.state.name, this.state.login)
	}

	render(){
		return (
		<LoginDiv>
			<form>
				<input placeholder="user name" value={this.state.name} onChange={this.loginHandler} name="name" />
				<input placeholder="password" value={this.state.login} onChange={this.loginHandler} name="login"/>
				<button onClick={this.login}>Login</button>
			</form>
		</LoginDiv>
		)
	}
}

export default Login;