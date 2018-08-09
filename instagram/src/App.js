import React from 'react';
import './App.css';
import dummyData from './dummy-data.js'
import PostsPage from './components/PostContainer/PostsPage';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ''
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  render() {
    return (
      <div>
        <PostsPage />
      </div>
    );
  }
}

export default App;
