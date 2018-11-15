import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    position: fixed;
    top: 0;
    width: 900px;
    max-width: 100%;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        display: inline-block;
    }

    input {
        width: 50%;
        padding: 5px;
        font-size: 20px;
        box-sizing: border-box;
    }

    button {
        font-size: 20px;
        padding: 5px 20px;
        background: white;
        cursor: pointer;
    }
`

const Login = props => {
    return (
            <StyledForm onSubmit={props.logIn}>
                <h1>Login to InstaClone</h1>
                <input type="text" name="userInput" 
                placeholder="user name" value={props.userInput}
                onChange={props.userInputChange} />
                <input type="text" name="passWord" placeholder="password" />
                <button type="submit">Log In</button>
            </StyledForm>
    );
}

export default Login;