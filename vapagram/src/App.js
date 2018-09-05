import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsContainer from './components/PostsContainer/PostsContainer';
import SearchBar from './components/SearchBar/SearchBarContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      search: ''
    };
  }
  search = event => {
    event.preventDefault();
    let posts = [...this.state.posts];
    posts = posts.filter(post => {
      if (post.username === this.state.search) {
        return post;
      } else {
        return null;
      }
    });
    this.setState({ posts });
  };
  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    this.setState({
      posts: dummyData
    });
  }
  render() {
    return (
      <div className="App">
        <SearchBar search={this.search} handleChange={this.handleChange} />
        <PostsContainer
          posts={this.state.posts}
          comments={this.state.comments}
        />
      </div>
    );
  }
}

export default App;
