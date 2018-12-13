import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
  const d1 = Date.now().valueOf();
  const d2 = new Date(props.user.timestamp);
  console.log(d1, d2, props.user.timestamp);
  return (
    <div className="post">
      <div className="name">
        <img className="thumbnail" src={props.user.thumbnailUrl} alt="Thumbnail" />
        <div className="username">{props.user.username}</div>
      </div>
      <img src={props.user.imageUrl} alt="post image" className="postImg"/>
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
      <CommentSection comments={props.user.comments} />
    </div>
  );
}

export default Post;