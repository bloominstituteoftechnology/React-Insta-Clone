import React, { Component } from 'react';
import PostsPage from '../src/components/PostContainer/PostsPage';
import Authenticate from '../src/Authentication/Authenticate';
import Login from '../src/components/Login/Login';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  faComment,
  faHeart,
  faCompass,
  faUser
} from '@fortawesome/free-regular-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(faComment, faHeart, faEllipsisH, faCompass, faUser, faSearch, fab);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>{this.props.loggedIn ? <PostsPage /> : <Login />}</div>;
    // return <Login />;
  }
}
export default Authenticate(App);
