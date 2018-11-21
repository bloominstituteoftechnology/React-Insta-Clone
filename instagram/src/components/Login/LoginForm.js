import React from 'react';
// import { Button } from 'reactstrap';
// import styled from 'styled-components';
import styled, { css } from 'styled-components';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';


const Button = styled.button`
background: gray;
  border-radius: 3px;
  border: 2px solid black;
  color: white;
  margin: 0 1em;
  padding: 0.45em 2.5em;
  width: 20%;


  `;

  const GreenButton = styled(Button)`
    color: tomato;
    border-color: tomato;
    background: transparent;

`





const LoginForm = props => {
    return (
        <form className='inputs'>
            <input 
            className="search-box" 
            name="username"
            type="text" 
            size="40" 
            value={props.username}
            placeholder="Username"
            onChange={props.handleChange}>
             </input> 

            <input 
            className="search-box" 
            name="password"
            type="text" 
            size="40" 
            value="password"
            placeholder="Password"
            onChange={props.handleChange}
            >
             </input>

            <Button onClick={props.login}>Login</Button>
            <GreenButton primary>PrimaryLogin</GreenButton>
            {/* <Button 
            color="success" 
            onClick={() => alert('clicked button')}
            size='lg'
            >Login</Button> */}


        </form>
         
    )
}

export default LoginForm;