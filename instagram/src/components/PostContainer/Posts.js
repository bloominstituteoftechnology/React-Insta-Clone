import React, { Component } from 'react';
import Comments from "../CommentSection/Comments";
import'./Post.css';

class Posts extends Component {
  state = {  }
  render() { 
    console.log(this.props)
    return (  
      <>
      {this.props.posts.map(post => {
        return[
          <h1 key={post.username}>{post.username}</h1>,
          <>
            <Comments comments={post.comments}/>
          </>,
        ] 
      })}
      <h2>i'm the post Component</h2>
      
      </>
    );
  }
}



 
export default Posts;