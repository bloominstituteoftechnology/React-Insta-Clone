//PostPage
import React from 'react';
import PostContainer from './PostContainer.js';
import SearchBar from './Searchbar.js';
import CommentSection from './CommentSection.js';
import dummyData from '../dummy-data';

class PostPage extends React.Component {
  constructor(){
    super();
    this.state = {
      data: dummyData
    }
  }


  changeHandler = e => {
    this.setState({input: e.target.value})
  }

  find = event => {
    const posts = this.state.data.filter(post=>{
      if(post.username===this.state.input){
        return true;
      }
      else {
        return false;
      }
    })
    this.setState({search: posts})

  }
  render(){
    return(
      <div>
        <SearchBar search={this.state.input} change={this.changeHandler} searchGram={this.find}/>
        <PostContainer posts={this.state.data} />
      </div>
    )
  }
}

export default PostPage;
