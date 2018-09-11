import React, { Component } from "react";
import "./Post.css";

class Post extends Component {
  render() {
    return (
      <article className="Post" ref="Post">
        <header>
          <div className="Post-user-avatar">
            <img
              src="https://www.laravelnigeria.com/img/chris.jpg"
              alt="Chris"
            />
          </div>
          <div className="Post-user-nickname">
            <span>Chris</span>
          </div>
        </header>
        <div className="Post-image">
          <div className="Post-image-bg">
            <img
              alt="Icon Living"
              src="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg"
            />
          </div>
        </div>
        <div className="Post-caption">
          <strong>Chris</strong> Moving the community!
        </div>
      </article>
    );
  }
}

export default Post;
