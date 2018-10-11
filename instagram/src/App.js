
import React, {
  Component
} from 'react';
import './App.css';
import PostsPage from './src/components/PostContainer/postspage';
import Authenticate from './components/Authentication/authenticate'

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
    <PostsPage />)
  }
}

export default Authenticate(App);