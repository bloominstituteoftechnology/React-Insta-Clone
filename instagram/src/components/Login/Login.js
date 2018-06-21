import React, { Component } from "react";
import styled from "styled-components";

const LoginCont = styled.div`
margin: 0 auto;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 350px;
  height: 467px;
  border-top:1px solid #000;;
border-bottom:1px solid #000;;
border-left:1px solid #000;;
border-right:1px solid #000;;
`;
const LoginHeader = styled.h1`
display: flex;
justify-content: center;
width: 350px;
color:red;
`;
const LoginInput = styled.input`
display: flex;

width: 268px;
height: 38px;
border-top:1px solid gray;
border-bottom:1px solid gray;
border-left:1px solid gray;
border-right:1px solid gray;


`;
const LoginButton = styled.button`
display: flex;
justify-content: center;
text-align: center;
width: 268px;
height: 38px;
background: #2196F3;
color: white;
border-top:1px solid gray;
border-bottom:1px solid gray;
border-left:1px solid gray;
border-right:1px solid gray;


`;

class Login extends Component {
    constructor() {
      super();
      this.state = {
        username:"",
        password:""
      };
    }
  // use componentDidMount to set dumyData on state
//   componentDidMount() {
//     // will be called third
//     if (window.localStorage.getItem("usernameInput")) {
//       this.setState({
//         posts: JSON.parse(window.localStorage.getItem("comments"))
//       }); // preferable for Async calls... AJAX
//     } else {
//       this.setState({ posts: dummyData }); // preferable for Async calls... AJAX
//     }
//     window.localStorage.setItem("comments", JSON.stringify(dummyData));
//   }
   
changeusername = event =>
    this.setState({
    //   usernameInput: event.target.value,
      username: event.target.value
    });

    changepassword = event =>
    this.setState({
    //   usernameInput: event.target.value,
      password: event.target.value
    });

  loginSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    localStorage.setItem("user", username);
    
    const password = this.state.password;
    localStorage.setItem("pasword", password);
   
    window.location.reload(); 

    // const comments = this.state.comments.slice();
    // comments.push({ text: this.state.input, username: "username" });
    // this.setState({
    //   comments,
    //   input: "",
      
    // });
  };
  
    render() {
      return (
          <LoginCont >
              <div>
              <LoginHeader > Instagram
              </LoginHeader> 
              </div>
              <form onSubmit={this.loginSubmit}>
         <LoginInput 
         onChange={this.changeusername}
              className="userinput"
              type="text"
              placeholder="Phone number, username, or email"
              
            //   placeholder={this.state.placeholder}
              value={this.state.username} 
                   />

              <LoginInput 
              onChange={this.changepassword}
              className="passwordinput"
              type="text"
              placeholder="Password"
            //   placeholder={this.state.placeholder}
              value={this.state.password}
                  />
                  <LoginButton onClick={this.loginSubmit}>Login</LoginButton>
                  </form>
          </LoginCont>
      );
    }
  }

  export default Login;