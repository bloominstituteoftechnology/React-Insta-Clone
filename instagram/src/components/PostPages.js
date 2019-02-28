import React, { Component } from 'react';
import dummyData from '../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from './SearchBar';

class PostPages extends Component {
  constructor(props) {
    super(props);
    this.state = {

        postData: [],
        filteredPosts: [],
        SearchInput: ''
    };
  }

  componentDidMount() {
      this.setState({ postData: dummyData});
  }

  changeHandler = event => {
      this.setState({ [event.target.name]: event.target.value });
  };

  searchHandler = e => {
      this.changeHandler(e)
      this.setState((prevState) => {
          const filteredPostArray = prevState.postData.filter(post => post.username.includes(prevState.searchInput))
          return {filteredPosts: filteredPostArray}
      })
  }

  // Search = event => {
  //   const posts = this.state.postData.filter(post => {
  //     if (post.username.includes(event.target.value)) {
  //       return post
  //     }
  //   })
  //   this.setState({ filteredPosts: posts })
  // }


render() {

  return (
<div className="container">
      <SearchBar searchInput={this.state.searchInput} searchHandler={this.searchHandler}/>
      <PostContainer dummyData={this.state.postData}
      postData={this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.postData} />
</div>)
}
}






export default PostPages;
