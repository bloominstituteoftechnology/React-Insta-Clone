import React from "react";
import Header from './Header';

import "./PostContainer.css"
const NewPost = props => {
    return (
        <div className="post-wrapper">
          <Header
            username={props.posts.username}
            thumbnailUrl={props.posts.thumbnailUrl}
          />
          <div className="post-image-wrapper">
            <img
              alt="post thumbnail"
              className="post-image"
              src={props.posts.imageUrl}
            />
          </div>
        </div>
      );
    };


export default NewPost;