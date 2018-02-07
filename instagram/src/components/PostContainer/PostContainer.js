import React, { Component } from "react";
import "./PostContainer.css";

function PostContainer(props) {
  return (
    <div className="postContainer">

      <div className="postContainer--header">

        <img className="postContainer--header--thumbnail" alt="thumbnail" src="https://scontent-lax3-2.cdninstagram.com/vp/d019d2aea0535e4f0bb4c0c1c3995b6f/5B0806B9/t51.2885-19/11356421_1603857263217252_510625750_a.jpg" />

        <p id="username">{props.dummy[0].username}</p>

      </div>
      
      <div className="postContainer--image">
        <img id="image" alt="image" src="https://i.imgur.com/rDYcXnG.jpg" />
      </div>

    </div>
    )
}

export default PostContainer;