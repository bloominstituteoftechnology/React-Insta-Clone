import React from 'react';
import './App.css';
import PostPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';
import LoginPage from './components/Login/Login';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
  
    }
  }

  Login = props => {

  }

  render(){
    return(<PostPage />) 
  }
}

export default Authenticate(App);
