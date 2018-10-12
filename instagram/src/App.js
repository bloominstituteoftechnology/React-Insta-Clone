import React from 'react';
import './App.css';

import Authenticate from './components/Authentication/Authenticate';
import PostsPage from './components/PostContainer/PostsPage'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
    }


  render() {
    return (
        <PostsPage signOut={this.props.signOut}/>
    )
  }
};

export default Authenticate(App);