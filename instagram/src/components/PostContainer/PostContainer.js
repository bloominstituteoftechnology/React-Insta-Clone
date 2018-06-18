import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import moment from 'moment';

const PostContainer = props => {
  console.log(props.postData);

  return (
    <div className="post-container">
      <div className="post-header-container">
        <img src={props.postData.thumbnailUrl} />
        <div className="username">{props.postData.username}</div>
      </div>
      <img src={props.postData.imageUrl} />
      <i class="far fa-heart"></i>
      <i class="far fa-comment"></i>
      {props.postData.likes}
      <CommentSection comments={props.postData.comments}/>
      {moment().startOf('day').fromNow(props.postData.timestamp)}
    </div>
  );
};

export default PostContainer;
