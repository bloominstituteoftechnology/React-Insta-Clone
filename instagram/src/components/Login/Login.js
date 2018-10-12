import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 100px auto 0 auto;
    background: dodgerblue;
    height: 200px;
    width: 50%;
    border-radius: 5px;
`

const Input = styled.input`
    width: 200px;
    height: 25px;
    margin 5px;
    border: none;
    border-radius: 2px;
`

const Button = styled.button`
    margin-top: 10px;
    width: 75px;
    height: 25px;
    background: springgreen;
    border: solid 1px black;
    border-radius: 50px;
`

const LoginPage =   (props) =>  {
    return(
        <Form onSubmit={event   =>  props.login(event)}>
            <Input placeholder="username..." onChange={props.inputChangeHandler}></Input>
            <Input placeholder="password..." type="password"></Input>
            <Button type="submit">Login</Button>
        </Form>
    )
}

export default LoginPage;
