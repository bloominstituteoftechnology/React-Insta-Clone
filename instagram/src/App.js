import React, { Component } from 'react';

import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data'

class App extends Component {

  state = {
    data: [],
    filter: []
  }

  componentDidMount() {
    this.setState({ data: dummyData });
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
      <>
        <SearchBar search={this.filteredSearchHandler}/>
        <div className="posts">
          <PostContainer data={this.state.data} />
        </div>
      </>
    );
  }
}

export default App;