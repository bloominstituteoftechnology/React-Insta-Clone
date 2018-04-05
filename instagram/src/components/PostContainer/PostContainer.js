import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';

const PostContainer = props => {
  return (
    <div className="post-container">
      <div className="header-img">
        <img className="icon" src={props.data.thumbnailUrl} alt="User icon" />
        <h5 className="header">{props.data.username}</h5>
      </div>
      <div>
        <img className="main-img" src={props.data.imageUrl} alt="Main post content" />
      </div>
      <div className="img-button-container">
        <img className="img-button" src="img/heart.png" alt="Like button"/>
        <img className="img-button" src="img/answer.png" alt="Comment button" />
      </div>
      <div className="likes"><p>{props.data.likes} Likes</p></div>
      <CommentSection
        change={props.change}
        submit={props.submit}
        comments={props.data.comments}
        value={props.value} />
    </div>
  );
}

export default PostContainer;
