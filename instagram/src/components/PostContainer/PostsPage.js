import React from 'react';
import PropTypes from 'prop-types';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import SearchComponent from '../SearchBar/SearchComponent';

class PostsPage extends React.Component{
  constructor(){
    super()
    this.state = {
      data: [],
      filteredPosts: [],
    }
  }

  componentDidMount(){
    this.setState({data: dummyData})
  }

  searchPostHandler = e => {
    const posts = this.state.data.filter(res => {
      if (res.username.includes(e.target.value)){
        return res;
      }
    });
    this.setState({ filteredPosts: posts });
  };

  render() {
    return (
      <div className="App">
        <SearchComponent searchPostHandler={this.searchPostHandler}/>
        <PostContainer
          search={this.state.search} data={this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.data}/>
      </div>
    );
  }
}

export default PostsPage;
