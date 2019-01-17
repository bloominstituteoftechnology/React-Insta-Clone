import React from 'react'
import styled from 'styled-components';

// Styles using 'styled-components'
const Header  = styled.div`
text-align: center;
width: 20%;
margin: 117px auto;
border: 2px solid grey;
border-radius: 28px;
height: 150px;
background: #e6e6e6;

`;
const BoxLogin = styled.div`
margin-top: 20px;
font-family: Double Struck
color: red; 
`
const Button = styled.button`
  color: tomato;
  font-size: 1em;
  margin: 12px;
  padding: 0.1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;  

const Login = props => {
	return (
			<Header >
				<BoxLogin><h4>LOGIN PAGE</h4>
				<form>
					<input type="text" placeholder="UserName"/>
					<input type="text" placeholder="Password"/>
				</form>
				<Button onClick = {props.loggingInInsta}>LOGIN</Button>
				</BoxLogin>
			</Header >
		
	)
}


export default Login;
