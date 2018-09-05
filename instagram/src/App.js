import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
// import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import PostsPage from './components/PostContainer/PostContainer';

 class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData,
      inputText: '',
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  render() {
    return (
      <div className="appContainer">
        <PostsPage/>
      </div>
    );
  }

}

 export default App;