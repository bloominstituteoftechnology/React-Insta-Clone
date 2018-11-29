import React, { Component } from 'react';
import SearchBar from "../src/components/SearchBar/SearchBar";
import PostContainer from "../src/components/PostContainer/PostContainer";

import dummyData from "../src/dummy-data";
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      postFilter: []
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData});
  }

  handleSearch = event => {
    const search = this.state.posts.filter(search => {
      if (search.username.includes(event.target.value)) {
        return search;
      }
    });
    this.setState({postFilter: search});
  }

  render() {    
    return (
      <div className="App">        
        <SearchBar
          handleSearch={this.handleSearch}
        />
        <PostContainer 
        posts={this.state.postFilter.length > 0 ? this.state.postFilter :this.state.posts}
         />                
      </div>
    );
  }
}

export default App;
