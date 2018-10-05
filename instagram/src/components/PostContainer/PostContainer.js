import React from 'react';
import './PostContainer.css';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
  return (
    <div className="PostContainer">
      <header className="PostContainer-Header">
        <img src={props.data.thumbnailUrl} alt="User" />
        {props.data.username}
      </header>
      <div className="PostContainer-Img-Container">
        <img src={props.data.imageUrl} alt="Image" />
      </div>
      <div className="PostContainer-Icons">
        <ion-icon name="heart-empty" />
        <ion-icon name="chatbubbles" />
      </div>
      <div className="PostContainer-Likes">{props.data.likes} likes</div>
      <CommentSection comments={props.data} />
    </div>
  );
};

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.object)
  })
};

export default PostContainer;
