import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
      filteredSearch: ''
    }
  }

  handleSearchInput = (event) => {
    
    this.setState({
      [event.target.name]: event.target.value
    });
  }

//if the search bar is empty return all the dat(this.state.data)

//otherwise return only the post with matching username
  getFilteredSearch = () => {
    
    if(this.state.filteredSearch = '') {
      return this.state.data
    }

    return this.state.data.filter(post => {
      const username = post.username.toLowerCase().includes(this.state.filteredSearch.toLowerCase())
        return username
    })
  }
  

  render() {
    return (
      <div className="container">
        <SearchBar 
          filteredSearch={this.state.filteredSearch}
          handleSearchInput={this.handleSearchInput}
        />
        <PostContainer 
          data={this.getFilteredSearch()} 
        />
      
      </div>
    );
  }
}

export default App;
