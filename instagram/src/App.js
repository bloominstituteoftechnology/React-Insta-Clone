import React, {
  Component
} from 'react';
import PostsPage from './components/PostContainer/postspage';
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