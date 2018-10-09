import React from "react";

import "./PostContainer.css";

const PostContainer = props => {
  return (
    <div className="post-container">
      {props.data.map(info => (
        <div className="post-box">
          <div className="user-container">
            <img className="thumb" src={info.thumbnailUrl} />
            <h2 className="user-name">{info.username}</h2>
          </div>
          <img src={info.imageUrl} />
          <div className="buttons">
            <i className="far fa-heart" />
            <i className="far fa-comment" />
          </div>
          <span className="likes">{info.likes}</span>
          <div className="comments">
            <h1>{info.comments}</h1>
          </div>
          <div>
            <span className="time-stamp">{info.timestamp}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostContainer;
