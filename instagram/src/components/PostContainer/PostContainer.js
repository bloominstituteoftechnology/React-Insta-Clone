import React from "react";
import "./PostContainer.css";

const PostContainer = props => {
  return (
    <div className="container">
      
      <div className="post">
        
        <div className="post__header">
          <img
            className="post__header--avatar"
            src="https://placekitten.com/g/50/50"
            alt="bruh"
          />
          <h3 className="post__header--username">{props.user.username}</h3>
        </div>

        <div className="post__content">
          <img
            className="post__content--img"
            src="https://placekitten.com/g/300/300"
            alt="bruh"
          />
        </div>
        
        <div className="post__icons">

        </div>

        <div className="post__likes">

        </div>

        {/* <div className="post__comments">
                        SEPARATE COMPONENT, DUDE
        </div> */}

        <div className="post__timestamp">

        </div>





        <h1>post</h1>
      </div>
    </div>
  );
};

export default PostContainer;
