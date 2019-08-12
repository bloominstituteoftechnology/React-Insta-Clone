import React from 'react';
import {FormGroup, FormControl, FormLabel } from "react-bootstrap";
import Instagram from './logo.png';


import styled from 'styled-components';


export const Button = styled.button`
  
width:150px;
margin-left:35%;
background:#33A2FF;
color:white;
border-radius:10px;
border:0px solid;
 
`;


export const Form=styled.form`
border:1px solid rgb(202, 202, 202);
width:480px;
margin:auto;
margin-top:20px;
padding:10px 10px 10px 10px;

`;





export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:"",
        }
    }


    validateForm(){
        return this.state.email.length>0 && this.state.password.length >0;
    }

    handleChange=e=>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit=e=>{
          e.preventDefault();
          const user = this.state.email;
          localStorage.setItem('user', user);
          window.location.reload();
      };


      
    

    render() {
        return (
          <div /*className="Login"*/><Form>
          <img alt='instagram' src={Instagram} className='login-logo'></img>
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="email" bssize="large">
                <FormLabel>Username</FormLabel>
                <FormControl
                  autoFocus
                  type="username"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup controlId="password" bssize="large">
                <FormLabel>Password</FormLabel>
                <FormControl
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                />
              </FormGroup>
              <Button //className='loginbtn'
           disabled={!this.validateForm()}
           type="submit"
           
          >
            Login
          </Button>
            </form>  </Form>
          </div>
        );
      }




}


