import React, { Component } from 'react';
import './App.css';

import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/searchbar';
import PostContainer from './components/PostContainer/postcontainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      instaData: dummyData,
      searchInput: '',
      commentInput: ''
    }
  }

  searchInsta = (event) => {
    this.setState({

    });
  }

  addComment = (event) => {
    this.setState({

    });
  }

  handleInput = (event) => {
    const inputTarget = event.target.name;
    this.setState({
      [inputTarget]: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar 
          searchData={this.state.searchInput} 
          searchHandler={this.handleInput} 
        />
        {this.state.instaData.map( (postData) => 
          <PostContainer 
            postData={postData} 
            commentData={this.state.commentInput} 
            commentHandler={this.handleInput} 
            key={postData.timestamp + '-' + postData.username} 
          /> 
        )}
      </div>
    );
  }
}

export default App;
