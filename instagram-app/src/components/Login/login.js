import React from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";





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
          <div className="Login">
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
              <Button className='loginbtn'
           onClick={this.handleSubmit}
           
          >
            Login
          </Button>
            </form>
          </div>
        );
      }




}

