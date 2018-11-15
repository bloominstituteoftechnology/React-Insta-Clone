import React, { Component } from 'react';
import dummyData from './../.././dummy-data';
import SearchBar from './../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import './../../App';



class PostPage extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filteredSearch: []
    }
  }

  componentDidMount = () => {
    this.setState({
      data: dummyData
    })
  }

  handleSearchInput = (event) => {
    
    this.setState({
      [event.target.name]: event.target.value
    });
  }

//if the search bar is empty return all the dat(this.state.data)

//otherwise return only the post with matching username
  getFilteredSearch = (e) => {
      const filteredPost =  this.state.data.filter(post => {
        if(post.username.includes(e.target.value)) {
            return post
          }
          this.setState({filteredSearch: filteredPost})
      })
      

    // return this.state.data.filter(post => {
    //   const username = post.username.toLowerCase().includes(this.state.filteredSearch.toLowerCase())
    //     return username
   // })
    // this.setState({
    //   filteredSearch: username
    // })
  }
  

  render() {
    return (
      <div className="container">
        <SearchBar 
          filteredSearch={this.state.filteredSearch}
          handleSearchInput={this.handleSearchInput}
        />
        <PostContainer 
          Postdata={this.state.filteredSearch.length > 0 ? 
            this.state.filteredSearch : 
            this.state.data
        } 
        />
      
      </div>
    );
  }
}

export default PostPage;
