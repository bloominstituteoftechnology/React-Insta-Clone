import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/postcontainer';
import SearchBar from './components/SearchBar/searchbar';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      searchQuery: ''
    };
  }

  componentDidMount() {
    this.setState({data: dummyData})
  }

  handleSearchChange = event => {
    this.setState({searchQuery: event.target.value})
  };

  searchPostsHandler = event => {
    event.preventDefault();
    const posts = this.state.data.filter((item) => {
      if(item.username === event.target.value) 
        return posts;
    });
    this.setState({data: posts})
  };

  render() {
    const userSearch = this.state.data.filter((data) => {
      return data.username.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) != -1   
    })
    return (
      <div className="App">
        <SearchBar searchTerm={this.state.searchTerm} searchPosts={this.searchPostsHandler} onChange={this.handleSearchChange}/>
        {userSearch.map(item =>  <PostContainer data={item} key={item.timestamp}/>)}
      </div>
    );
  }
}

export default App;