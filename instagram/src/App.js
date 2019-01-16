import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username
    }
  }

  componentDidMount() {
    localStorage.setItem('username', this.state.username)
  }

  render () {
    return (
      <div>
        <PostsPage />
      </div>
    )
  }

}


export default Authenticate(App);
