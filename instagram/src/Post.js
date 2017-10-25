import React, { Component } from 'react';

export const Posts = (props) => {
  return (
    <div>
      {props.posts.map((post) => {
        return (
          <div className="post">
            <img src={post.thumbnailUrl} height="30px"></img>
            <span className="username"> {post.username} <br /></span>
              <img src={post.imageUrl} width="250px"></img>
            <div>
            <i className="em em-heart"></i>
            <i className="em em-speech_balloon"></i>
            </div>
            {post.likes} likes
            <div>
              {post.comments.map((comment) => {
                return (
                  <div className="comment">
                    <span className="username">{comment.username}</span>
                    <span className="commentText">{comment.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  )
}


export default Posts;