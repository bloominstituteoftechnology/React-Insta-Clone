import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faCommentAlt, faEllipsisH, faCompass, faUser, faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import PostsPage from '../PostsPage/PostsPage';
import Authentication from '../../Authentication/Authentication';
library.add(faHeart, faCommentAlt, faEllipsisH, faCompass, faUser, faCameraRetro);

class App extends Component {
  constructor() {
    super();

    this.state = {

    }
  }


  render() {
    return (
      <div className="App">
        <PostsPage />
      <a href="https://fontawesome.com/license">Icons by FontAwesome</a>
      </div>
    );
  }
}

export default Authentication(App);
