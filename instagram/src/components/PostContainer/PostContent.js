import React from 'react';
import './PostContainer.css';

const PostContent = props => {
  return (

    <div className="post-content">

      <div className="header-bar">
        <img className="profile-img"
          src={props.item.thumbnailUrl}
          alt="Usr"
        />
        <h2>{props.item.username}</h2>
      </div>

      <img
        className="post-img"
        src={props.item.imageUrl}
        alt="/"
      />

    </div>

  )
}

export default PostContent;
