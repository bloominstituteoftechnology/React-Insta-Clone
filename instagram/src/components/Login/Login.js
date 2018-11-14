import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    position: fixed;
    top: 0;
    width: 100%;
    max-width: 100%;
    font-size: 30px;
    font-weight: bold;

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
                <input type="text" name="userInput" 
                placeholder="user name" value={props.userInput}
                onChange={props.userInputChange} />
                <button type="submit">Submit</button>
            </StyledForm>
    );
}

export default Login;