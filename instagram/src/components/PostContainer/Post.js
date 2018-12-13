import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

const Post = props => {
  return (
    <div className="post">
      <div className="name">
        <img className="thumbnail" src={props.user.thumbnailUrl} alt="Thumbnail" />
        <div className="username">{props.user.username}</div>
      </div>
      <img src={props.user.imageUrl} alt="post" className="postImg"/>
      <FontAwesomeIcon
        icon={['fas', 'heart']}
        size="3x"
        className="postIcon"
      />
      <FontAwesomeIcon
        icon={['fas', 'comment']}
        size="3x"
        className="postIcon"
      />
      <div className="likes">{props.user.likes} likes</div>
      <CommentSection comments={props.user.comments} timestamp={props.user.timestamp}/>
    </div>
  );
}

Post.propTypes = {
  user: PropTypes.shape({
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    comments: PropTypes.arrayOf(PropTypes.object)
  })
}

Post.defaultProps = {
  user: PropTypes.shape({
    thumbnailUrl: "",
    username: "anonymous",
    imageUrl: "",
    likes: 0,
    comments: []
  })
}

export default Post;