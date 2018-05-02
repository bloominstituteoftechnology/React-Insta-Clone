import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import "./postContainer.css";

class PostContainer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="post-container">

        <div>
          {this.props.tweets.map(function(tweet, index) {
            return (
              <div key={index} className="post-wrapper">
              <section className="user-thumb">
                <img src={tweet.thumbnailUrl} />
                <p>{tweet.username}</p>
              </section>
              <section className="main-img">
                <img src={tweet.imageUrl} />
              </section>
              <section className="likes">
                <div>
                  <span>&hearts; </span>
                  <span>&loz;</span>
                </div>
                <div>
                  {tweet.likes} likes
                </div>
              </section>
              <CommentSection comments={tweet.comments}/>
              </div>
              )
          })}
        </div>

      </div>
    )
  }

}

export default PostContainer;