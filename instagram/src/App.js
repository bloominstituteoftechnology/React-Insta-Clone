import React, { Component } from 'react';
import './App.css';
import PostPage from './components/PostContainer/PostPage';
import Authenticate from "./components/Authentication/Authenticate";
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faCommentDots } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart, faComment, faCommentDots)



class App extends Component {
  constructor() {
    super();
    this.state = {
      // dummyData: [],
    };
  }

  render() {
    return (
      <div className="App">
        <PostPage />
      </div>
    );
  }
}

export default Authenticate(App);
