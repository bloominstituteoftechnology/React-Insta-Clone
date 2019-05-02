import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';
import styled from 'styled-components'

class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: ''
        };
      }

      databinder=(e)=>{this.setState({ [e.target.name]: e.target.value });}

      loginHandle =(e)=>{
        const user = this.state.username;
        window.localStorage.setItem('user', user);
        window.location.reload();
      };
      
   
    render() {
      const StyledDiv = styled.div`
      border: solid gray 1px;
      width: 500px;
      height: 200px;
      margin:0 auto;
      margin-top: 5%;
      border-radius:10px;
      background-color: rgb(172, 218, 208);
      Input{
        margin: 0 auto;
        margin-top: 10px;
        text-align: center;
        width: 80%

      }
       Button{
         margin-top: 10px;
         background-color: black;
       }
      `;

        return (
            
              <StyledDiv>
                <Form>
                    <Input name="username" onChange={this.databinder} value={this.state.username} type="text" placeholder="Enter User Name" ></Input>
                    <Input name ="password" onChange={this.databinder} value={this.state.password} type="password" placeholder="password" ></Input>
                    <Button  onClick={this.loginHandle} >Log In</Button > 
                </Form>
                </StyledDiv>
            
        );
    }
}

export default Login;


