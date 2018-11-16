import React from 'react';
import styled from 'styled-components';
import * as Icon from 'react-feather';

const StyledForm = styled.form`
    // position: fixed;
    // top: 0;
    width: 900px;
    max-width: 90%;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px auto;
    border: 1px solid lightgray;
    border-radius: 10px;

    div {

        h1 {
            display: inline-block;
            margin: 20px 0;
            font-style: italic;
        }
        svg {
            margin-right: 10px;
        }
    }

    p {
        margin: 0;
        font-size: 20px;
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
        margin-bottom: 35px;
    }
`

const Login = props => {
    return (
            <StyledForm onSubmit={props.logIn}>
                <div>
                    <Icon.Instagram size={50}/>
                    <h1>InstaClone</h1>
                </div>
                <p>Please Login:</p>
                <input type="text" name="userInput" 
                placeholder="user name" value={props.userInput}
                onChange={props.userInputChange} />
                <input type="password" name="passWord" placeholder="password" />
                <button type="submit">Log In</button>
            </StyledForm>
    );
}

export default Login;