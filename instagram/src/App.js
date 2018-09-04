import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

 class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData,
      inputText: '',
    };
  }

  componentDidMount() {
    fetch(dummyData)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
      <div className="appContainer">
        <SearchBar />
        {this.state.posts.map(post => { return (
          <PostContainer post={post} key={post.timestamp}/>)
        })}
      </div>
    );
  }

}

 export default App;