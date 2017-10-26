import React from 'react';
import './PostList.css';
import Comment from './Comments.js';

const PostList = (props) => {
  return (
    <div>
      {props.postData.map((post) => {
        return (
          <div className="container">
            <div className="container--header">
              <img src={post.thumbnailUrl} className="thumbnail" alt="" /><div className="username">{post.username}</div>
            </div>
            <div className="container--image">
              <img src={post.imageUrl} className="contentImage" alt=""/>
            </div>
            <div className="postInfo">
              {/* favicons later */}
              <p className="postInfo__p">{post.likes} likes</p>
              { post.comments.map((comment) => {
                return <p className="postInfo__p">{comment.username}: {comment.text}</p>
              })}
              <p className="postInfo__p">{post.timestamp}</p>
            </div>
            <div>
              {/* <p>Comments here!</p> */}
              {<Comment comments={props.comment} />}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PostList;