import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';
import Login from './components/Login/Login';



class App extends Component {
  constructor() {
    super();
     
        this.state = {
          // dataSet: dummyData
        }
  }


  





render() {
  return (
    <div className="App">
    <PostsPage />
    
    
    </div>
  )
}
}// end curly





export default Authenticate(PostsPage)(Login);
