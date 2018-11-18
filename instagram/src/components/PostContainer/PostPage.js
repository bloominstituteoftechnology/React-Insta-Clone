import React, { Component } from 'react';
import dummyData from './../.././dummy-data';
import SearchBar from './../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import PropTypes from 'prop-types';
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
      data: dummyData,
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
        if(post.username.includes(this.state.filteredSearch)) {
            return true
          }
          return false
      }) 
     return filteredPost
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
            this.getFilteredSearch() : 
            this.state.data
            } 
        />
      
      </div>
    );
  }
}

PostContainer.propTypes = {
    data: PropTypes.array
};

export default PostPage;
