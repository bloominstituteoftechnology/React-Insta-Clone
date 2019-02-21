import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostPages from './components/PostPages'
import authenticate from './components/Authenticate';
import Login from './components/Login/Login'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    
    };
  }


render() {

  return (
<div >
    <PostPages />
</div>)
}
}


export default authenticate(App)(Login)
