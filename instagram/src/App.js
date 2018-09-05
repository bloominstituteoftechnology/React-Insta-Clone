import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsContainer from './components/PostsContainer/PostsContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      search: ''
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }


  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar handleInput={this.handleInput} />
        <PostsContainer posts={this.state.posts} searchTerm={this.state.search} />
      </div>
    );
  }
}

export default App;

