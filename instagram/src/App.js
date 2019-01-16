import React, { Component } from 'react';
import PostPage from './components/PostContainer/PostPage';
import Login from './components/Login/Login'
import './App.css';
import authenticate from './components/authentication/authenticate';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: props.username,
      password: "",
      loggedIn: props.loggedIn,
    }
  }

  // userLogIn = () =>{
  //   if(this.state.loggedIn === true){
  //     let newUsername = localStorage.getItem('username');
  //     console.log(newUsername);
  //     this.setState({username: newUsername});
  //   }
  //   this.setState({username: ''})
  // }
  // componentDidMount(){
  //   userLogIn();
  // }
  render() {
    
    return (
      <div className="App">
       {/* {window.onload = this.loggedIn} */}
        <PostPage 
        username={this.state.username}
        logout={this.props.logout}
        />
      </div>
    );
  }
}


export default authenticate(App)(Login);