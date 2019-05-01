import React from 'react';
import './App.css';


import dummyData from './dummy-data'; 

import PostContainer from './components/PostContainer/PostContainer'; 

import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  constructor () {
    super(); 
    this.state= {
      posts: [], 
      filteredPosts: []
    };
  }

  // componentDidMount with setState
  componentDidMount() {
    this.setState({
      posts: dummyData
    }); 
  }

  // Creating my searchFilter 
  searchFilter = e => {
    const posts = this.state.posts.filter(post => {
      if (post.username.includes(e.target.value)) {
        return post;
      }
    });
    this.setState({ filteredPosts:posts })
  }
  

render () {
  return (
    <div className="App">
      <SearchBar  searchTerm={this.state.searchTerm} searchPosts={this.searchFilter}/> 

      <PostContainer posts={this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.posts}/> 

    </div>
  );
}
}

export default App;

