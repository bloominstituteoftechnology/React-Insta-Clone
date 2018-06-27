import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from '/components/SearchBar/SearchBar';
class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    if (window.localStorage.getItem('comments')) {
      this.setState({
        posts: JSON.parse(window.localStorage.getItem('comments'))
      });
    } else {
      this.setState({ posts: dummyData });
    }
    window.localStorage.setItem('comments', JSON.stringify(dummyData));
  }
  render() {
    return (
     <div className="App">
      <SearchBar />
      <PostContainer posts={this.state.posts} />
     </div> 
    )};   
}

export default App;
