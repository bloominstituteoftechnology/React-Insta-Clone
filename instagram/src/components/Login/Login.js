import React from 'react'
import styled from 'styled-components';

// Styles using 'styled-components'
const Header  = styled.div`
	ext-align: center;
	width: 20%;
	margin: 117px auto;
	border: 2px solid grey;
	border-radius: 28px;
	height: 150px;
	background: #e6e6e6;

`;
const BoxLogin = styled.div`
	margin-top: 20px;
	margin-left: 80px;
	font-family: Double Struck
	color: red;
	& span h4 > {
		color: black;
	} 
	
`
const Button = styled.button`
  	color: tomato;
  	font-size: 1em;
	margin: 12px; 
	margin-left: 50px
  	padding: 0.1em;
  	border: 2px solid palevioletred;
	border-radius: 3px;
	 
`;  

const Login = props => {
	return (
			<Header >
				<BoxLogin><span><h4>LOGIN PAGE</h4></span>
				<form>
					<input type="text" placeholder="UserName"/>
					<input type="password" placeholder="Password"/>
				</form>
				<Button onClick = {props.loggingInInsta}>LOGIN</Button>
				</BoxLogin>
			</Header >
		
	)
}


export default Login;
