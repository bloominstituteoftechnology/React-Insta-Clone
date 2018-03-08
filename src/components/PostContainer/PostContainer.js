import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

const PostContainer = (props) => {
  return (
    <div>
      <div class="userName">
        <img src ={props.postings.thumbnailUrl} height='60'  width='60' class='rounded' />
        <div  class='userID'>{props.postings.username}</div>
      </div>
      <img src ={props.postings.imageUrl} height='600' class='mainImage'/>
      <div class='commentHeart'>
        <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-heart-outline-128.png" height="35" width="35"/>
        <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/124237-200.png" height="45" width="45"/>
      </div>
      
      <div class='likes'><b>{props.postings.likes}</b> likes</div>
      <div>
        {props.postings.comments.map((comment, i) => {
          return (
            <CommentSection key={i} eachComment={comment} />
          )
        })}
      </div>
    </div>
  )
};

export default PostContainer;