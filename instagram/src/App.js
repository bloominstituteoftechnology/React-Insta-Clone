import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Authenticate from './components/Authentication/Authenticate';  
import PostsPage from './components/PostContainer/PostsPage';
// import Login from './components/Login/Login';

class App extends Component {
  constructor (){
    super();
    this.state={
      username: '',
      password: '' 
    };
  } 

  // handleInput = event => {
  //   event.preventDefault();
  //   console.log("hello");
  //   this.setState({ [event.target.classList]: event.target.value });
  // };

  // login = event => {
  //   // this.setState(username: )
  //   localStorage.setItem('username', this.state.username);
  //   localStorage.setItem('password', this.state.password);
  //   console.log("hi");
  //   event.preventDefault(); 
  // };

  render(){
    // const AuthenticateApp = Authenticate(App);
    return(
      <div>
        {/* <AuthenticateApp /> */}
        {/* <Login  login={this.login} 
                handleInput={this.handleInput}
                username={this.state.username}
                password={this.state.password}/> */}
        <PostsPage />
      </div>
    );
  }

}

export default Authenticate(App);

 