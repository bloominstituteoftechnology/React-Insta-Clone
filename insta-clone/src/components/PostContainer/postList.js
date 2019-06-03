import React from "react";
import "./postContainer.css";
import PropTypes from "prop-types";
import Comments from "../CommentSection/commentSection";
import comment from "../../icons/comment.png";
import like from "../../icons/heart_unfilled.png";
import liked from "../../icons/heart_filled.png";

import more from "../../icons/more.png";
export default class postContainer extends React.Component {
  postTimeHandler = startTime => {
    let endTime = new Date();
    let timeDiff = endTime - startTime; //in ms
    // strip the ms
    timeDiff /= 1000 * 60;

    // get seconds
    var seconds = Math.round(timeDiff);
    return startTime;
  };

  postHandler = () => {
    if (this.props.data) {
      return this.props.data.map(post => {
        return (
          <div
            className="Post"
            key={post.id}
            username={post.username}
            likes={post.likes}
          >
            <section className="PostHeader">
              <img
                className="PostThumb"
                src={post.thumbnailUrl}
                alt="thumbnail"
              />
              <p id="username">{post.username}</p>
            </section>
            <img className="PostImage" src={post.imageUrl} alt="imagePost" />
            <section className="PostFooter">
              <div className="PostIcons">
                <img className="Icons" src={comment} />
                <img className="Icons" src={like} />
              </div>
              <p id="Likes">{post.likes} likes</p>
            </section>
            <Comments comments={post.comments} />
            <p className="Time">{this.postTimeHandler(post.timestamp)}</p>

            <div className="InputSection">
              <input
                className="CommentInput"
                type="text"
                placeholder="Add a comment..."
              />
            <img className="CommentButton" src={more} />
            </div>
          </div>
        );
      });
    }
  };

  render() {
    console.log(this.props.data);
    return <div>{this.postHandler()}</div>;
  }
}

postContainer.propTypes = {
  data: PropTypes.array.isRequired
};
