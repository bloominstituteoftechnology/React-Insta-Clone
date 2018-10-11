import React, { Component } from 'react';
import './App.css';
// import Search from './components/SearchBar/Search';
// import Posts from './components/PostContainer/Posts';
import data from './dummy-data'
import PostPage from './components/PostContainer/PostPage'

class App extends Component {

  state = {
    data: [],
    filter: [],
  }

  componentDidMount() {
    this.setState({data: data})
  }

  filteredSearchHandler = e => {
    const posts = this.state.data.filter( post => {
    if (post.username.includes(e.target.value)) {
        return post;
      } 
      return posts;
    });
    this.setState({filter: posts});
  };

  render() {
    return (
      <div className="App">
      <PostPage search={this.filteredSearchHandler} data={this.state} />
      </div>
    );
  }
}

export default App;
