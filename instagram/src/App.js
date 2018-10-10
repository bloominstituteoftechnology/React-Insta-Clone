import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsContainer from './components/PostsContainer/PostsContainer';
import SearchBar from './components/SearchBar/SearchBar'
class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ posts: dummyData });
    }, 500);
  }
  increment = prevState => {
    this.setState(prevState => ({ likes: prevState.likes + 1 }));
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  filter = event => {
    this.handleInput(event);
    this.setState(prevState => {
      const filteredPosts = prevState.posts.filter(post => {
        return post.username.includes(prevState.filterTarget);
      });
      return { filteredPosts };
    });
  };



  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostsContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
