import React from 'react';
import './Postcontainer.css';

import CommentSection from './CommentSection';
import heart from '../assets/heart.png';
import comment from '../assets/comment.png';
import send from '../assets/send.png';

import PropTypes from 'prop-types';

const PostContainer = props => {
  return (
    <div className="PostContainer">
      <div className="container post">
        <div className="post-header">
          <div className="thumbnail">
            <img src={props.thumbnail} alt="thumbnail" />
          </div>
          <h6>{props.username}</h6>
        </div>
        <div className="post-image">
          <img src={props.img} alt="" />
        </div>
        <div className="ui-controls">
          <img src={heart} alt="" className="heart" />
          <img src={comment} alt="" className="comment" />
          <img src={send} alt="" className="send" />
        </div>
        <button className="likes">{props.likes} likes</button>
        <CommentSection comments={props.comments} date={props.date} />
      </div>
    </div>
  );
};

PostContainer.propTypes = {
  thumbnail: PropTypes.string,
  username: PropTypes.string,
  img: PropTypes.string,
  likes: PropTypes.number,
  comments: PropTypes.string,
  newComment: PropTypes.string,
  onChange: PropTypes.func
};

export default PostContainer;
