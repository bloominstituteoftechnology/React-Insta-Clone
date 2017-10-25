import React, { Component } from 'react';
import moment from 'moment';
/*import postData from './application-data';*/

const Posts = (props) => {
  return (
    <div>
      {
        props.post.map(post => {
        return (
        <div>
          <h2><img src={post.thumbnailUrl} style={{width:50+'px'}}/>{post.username}</h2>
          <img src={post.imageUrl} style={{'max-width':500+'px'}}/>
          <span>likes: {post.likes}</span>
          <span>{moment(`${post.timestamp}`, "MMMDD YYYY HH:mm:ss a", 'en').fromNow()}</span>
          {post.comments.map(comment => {
            return (
              <div>
                <span>{comment.username}</span>
                <span>{comment.text}</span>
              </div>
            )
          })}
        </div>
      )})}
    </div>
  );
}
export default Posts;
/*
  username: "philzcoffee",
  thumbnailUrl: 'https://scontent-sjc2-1.cdninstagram.com/t51.2885-19/11201517_887808411287357_1307163552_a.jpg',
  imageUrl: 'https://scontent-sjc2-1.cdninstagram.com/t51.2885-15/e35/20066915_1526002357431295_3266739979170086912_n.jpg',
  likes: 400,
  timestamp: "July 17th 2017, 12:42:40 pm",
  comments: [
    {
      username: "philzcoffee",
      text: "We've got more than just delicious coffees to offer at our shops!"
    },
*/