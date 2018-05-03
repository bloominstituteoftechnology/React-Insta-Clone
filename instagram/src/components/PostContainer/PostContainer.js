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
          {this.props.tweets.map((tweet, index) => {
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
                  <span onClick={() => this.props.pressLike(index)}>&hearts; </span>
                  <span>&loz;</span>
                </div>
                <div>
                  {tweet.likes} likes
                </div>
              </section>
              <CommentSection
                comments={tweet.comments}

                allTweets={this.props.tweets}
                />
              <input
                onChange={(e) => this.props.addComment(e)}
                value={this.props.inputPostComment}
                type="text"
                placeholder="Add Comment"
                className="input-comment"
              />
              <button
                onClick={() => this.props.postComment(index)}
              >
                Post Comment
                </button>
              </div>
              )
          })}
        </div>

      </div>
    )
  }

}

export default PostContainer;