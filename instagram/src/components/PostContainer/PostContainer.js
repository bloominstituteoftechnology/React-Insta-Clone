import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js'
import './PostContainer.css';

const PostContainer = props => {
    return (
      <div className="Post-Container">
        <div className="header-Container">
          <img className="thumb-style" src={props.data.thumbnailUrl} />
          <h5 className="Username-Style" >{props.data.username}</h5>
        </div>
        <div>
          <img className="Img-style" src={props.data.imageUrl} />
        </div>
        <div className="Likes-style"><p>{props.data.likes} Likes</p></div>
        <CommentSection
          change={props.change}
          submit={props.submit}
          comments={props.data.comments}
          value={props.value} />
      </div>
    );
  }

  export default PostContainer;