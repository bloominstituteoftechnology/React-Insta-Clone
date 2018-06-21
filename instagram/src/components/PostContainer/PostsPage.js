import React, { Component } from 'react';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import dummyData from '../../dummy-data';


class PostsPage extends Component {
    constructor() {
      super();
      this.state = {
        posts: [],
        commentTemplate: {
          username: "Desco",
          text: ''
        }
      }
    }
  
    componentDidMount() {
      this.setState({posts : dummyData});
    }

    render () {
        return(
        <div>
        <SearchBar />
        <PostContainer 
                    posts={this.state.posts} 
                    addComment={this.addComment} 
                    commentTemplate={this.state.commentTemplate} 
                    addCommentHandler={this.addCommentHandler}/>
        </div>
        );
    }

}

export default PostsPage;