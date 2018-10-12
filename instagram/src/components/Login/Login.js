import React from 'react';
import styled from '../../../node_modules/styled-components';

const Button = styled.button`
    padding: 6px 10px;
    margin: 15px 5px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    height: 35px;
    color: whitesmoke;
        &:hover{
            ${props => props.disabled ? `background-color: darkgray` : `background-color: whitesmoke; color: darkcyan; opacity: 0.85`}
        }

    ${props => props.disabled ? `background-color: darkgray` : `background-color: darkcyan`}
    `
const Header = styled.h1`
    font-size: 40px;
    text-align: center;
    color: darkcyan
`
const Card = styled.div`
    font-family: 'Roboto', sans-serif;
    width: 40%;
    padding: 15px;
    background-color: #74d2f2;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    -webkit-box-shadow: 4px 6px 7px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 4px 6px 7px 1px rgba(0,0,0,0.75);
    box-shadow: 4px 6px 7px 1px rgba(0,0,0,0.75);
`
const SubHeader = styled.h3`
    font-size: 26px;
    text-align: center;
    color: darkcyan
`
const Input = styled.input`
    margin: 5px;
    height: 30px
`

export default class Login extends React.Component{
    constructor() {
        super()
        this.state = {
            username:'',
            password:''
        }
    }
inputChangeHandler = e => this.setState({[e.target.name]: e.target.value});
loginHandler = () => {
    localStorage.setItem('username', this.state.username);
    window.location.reload()
}
    render() {
        return  <Card>
                    <Header>Welcome to Jorge Osto's React Insta-Clone</Header>
                    <SubHeader>Please enter your loging info below</SubHeader>
                    <Input type="text" name="username" className="username" placeholder="Insert your Username..." onChange={this.inputChangeHandler} value={this.state.username}/>
                    <Input type="password" name="password" className="password" placeholder="Insert your Password..." onChange={this.inputChangeHandler} value={this.state.password}/>
                    <Button disabled={!this.state.username||!this.state.password ? true : false} onClick={this.loginHandler}> Log In </Button>
                </Card>
    }
} 
