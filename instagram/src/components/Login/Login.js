import React from 'react';
// import './Login.css';
import styled from 'styled-components'

 const StyledDiv = styled.div`
    background: #fafafa;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
 const StyledForm = styled.form`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    height: 300px;
    background: white;
    border: 0.5px solid lightgrey;
    width: 348px;
    height: 500px;
    margin-left: 50px;
`;


 const Input = styled.input`
    padding: 10px;
    width: 240px;
    border-radius: 3px;
    border: 0.5px solid lightgrey;
`;
 const Button = styled.button`
background: #3897f0;
color: white;
padding: 10px 100px;
border-radius: 3px;
border: none;
font-weight: bold;
`;

let Login = props => {
    return (
        <StyledDiv>
            {/* <HeroImg src={require('./assets/insta.jpg')} alt="hero"/> */}
            <StyledForm>
                {/* <Wordmark src={require('./assets/wordmark.svg')} alt='wordmark' /> */}
                {/* <StyledHeader>Log in to see photos and videos from your friends.</StyledHeader> */}
                <Input type="text" name="username" value={props.value} placeholder="Username" autoComplete="off"/>
                <Input type="password" name="password" value={props.value} placeholder="Password"/>
                <Button onClick={props.login}>Log In</Button>
            </StyledForm>
        </StyledDiv>
    )

}

export default Login;