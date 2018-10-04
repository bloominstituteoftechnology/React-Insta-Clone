import React, { Component } from 'react';
import PropTypes from"prop-types";
import Comments from "../CommentSection/Comments";
import'./Post.css';

class Posts extends Component {
  state = {  }
  render() { 
    console.log(this.props)
    return (  
      <div className="container">
        <div className="post-container">
          {this.props.posts.map(post => {
              return[
                <div className="post-header">
                  <img src={post.thumbnailUrl} alt="thumbnail"/>
                  <h3>{post.username}</h3>
                </div>,
                <div className="post-body">
                  <img src={post.imageUrl} alt="post"/>
                </div>,
                <p>{post.likes}</p>,
                <>
                  <Comments comments={post.comments}/>
                </> 
              ] 
            })}
          </div>
      </div>
    );
  }
}

Posts.PropTypes ={
  posts:PropTypes.arrayOf(PropTypes.shape({
    username:PropTypes.string,
    thumbnailUrl:PropTypes.string,
    imageUrl:PropTypes.string,
    comments :PropTypes.array
  }))
}

 
export default Posts;