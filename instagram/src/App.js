import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faCommentAlt, faEllipsisH, faCompass, faUser, faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import Authenticate from './Authentication/Authenticate';


library.add(faHeart, faCommentAlt, faEllipsisH, faCompass, faUser, faCameraRetro)

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
      loginCredentials: [
        {
          username: 'User1',
          password: '1234'
        },
        {
          username: 'User2',
          password: '1234'
        },
        {
          username: 'User3',
          password: '1234'
        }
      ],
      loginError: ''
    }
  }
  
  

  render() {
    return (
      <div className="App">
      <PostsPage />
      <a href = "https://fontawesome.com/license">Icons by FontAwesome</a>

      </div>
    );
  }
}

export default Authenticate(App);
