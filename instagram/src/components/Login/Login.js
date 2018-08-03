import React from 'react';
import './Login.css';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import styled from 'styled-components';







const LoginForm = styled.form`
 font-family: 'Grand Hotel', cursive;
 padding: 30px;
 width: 350px;
 text-align: center;
 display:flex;
flex-direction: column;
 justify-content: center;
 align-content: center;
`;





export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
            };
        }
    
    
        handleInputChange = e => {
            this.setState({[e.target.name]: e.target.value});
        }
    
        handleLoginSubmit = e => {
            const user = this.state.username;
            localStorage.setItem('user',user);
            window.location.reload();
    
        };
  
        render() {
            return (
       
       <LoginForm inline>
      <h3> Welcome to RachelGram </h3>
        <FormGroup className=" mb-2 mr-sm-2 mb-sm-0">
        <Input
        className="mr-sm-2"
        name="username"
        type="text" 
        placeholder="User Name"
        value={this.state.username}
        onChange= {this.handleInputChange}
        />
        </FormGroup> 
         <FormGroup className="mb-2 mr-sm-2 mb-sm-0"> 
          <Input 
        className="mr-sm-2" 
         name="password"
        type="text"
        placeholder="Password" 
        value={this.state.password}
        onChange={this.handleInputChange}
        />
         </FormGroup> 
        <Button
        className="mr-sm-2" 
        name="login"
        type="button"
        placeholder="Login"
        onClick={this.handleLoginSubmit}
         >
         Login
        </Button>
      </LoginForm>
    
    );
  }
}

// class Login extends React.Component {
//     constructor(props){
//     super(props);
//     this.state = {
//         username: '',
//         password: ''
//         };
//     }


//     handleInputChange = e => {
//         this.setState({[e.target.name]: e.target.value});
//     }

//     handleLoginSubmit = e => {
//         const user = this.state.username;
//         localStorage.setItem('user',user);
//         window.location.reload();

//     };
    
//     render(){
//         return (  
//             <form className="login-container">
//             <h3> Welcome to RachelGram </h3>
//                 <input
//                 name="username"
//                 type="text" 
//                 placeholder="User Name"
//                 value={this.state.username}
//                 onChange= {this.handleInputChange}
//                  />
//                 <input 
//                 name="password"
//                 type="text"
//                 placeholder="Password" 
//                 value={this.state.password}
//                 onChange={this.handleInputChange}
//                 />
//                 <br />
//                 <Button color="success" onClick={this.handleLoginSubmit}>
//                 Log In 
//                 </Button>
//                 </form>
//         );
//     }
// }
 
// export default Login;