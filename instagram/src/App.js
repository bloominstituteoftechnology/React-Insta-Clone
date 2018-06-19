import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      instagramData: [],
      placeholderUsername: 'lambdaschool',
      searchData: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    this.setState({instagramData: dummyData, searchData: dummyData});
  }

  addNewComment = (event, comment, index) => {
    event.preventDefault();
    const newData = this.state.instagramData.slice();
    newData[index].comments.push({username: this.state.placeholderUsername, text: comment});
    this.setState({instagramData: newData});
  }

  addLike = (event, index) => {
    event.preventDefault();
    const newData = this.state.instagramData.slice();
    newData[index].likes++;
    this.setState({instagramData: newData});
  }

  searchPosts = (event, term) => {
    event.preventDefault();
    let newData = this.state.instagramData.slice();
    if (term.trim() !== '') {
      newData = newData.filter((element) => element.username.includes(term));
    }
    this.setState({searchData: newData, searchTerm: term});
  }

  render() {
    return (
      <div className="app">
        <SearchBar searchPosts={this.searchPosts} />
        <PostContainer instagramData={this.state.searchData} addNewComment={this.addNewComment} addLike={this.addLike} />
      </div>
    );
  }
}

export default App;
