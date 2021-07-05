import React from 'react';
import './App.css';
import Authenticate from './components/Authentication/Authenticate';
import PostsPage from './components/PostContainer/PostsPage';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ''
    };
  }

  componentDidMount() {
    const user = localStorage.getItem('user');
    this.setState({ username: user });
  }

  render() {
    return (
      <div>
        <PostsPage />
      </div>
    );
  }
}

export default Authenticate(App);
