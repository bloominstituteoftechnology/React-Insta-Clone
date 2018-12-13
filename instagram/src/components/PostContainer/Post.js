import React from "react";
import PropTypes from "prop-types";
import "./PostContainer.css";
import Message from "./Message";
import Comments from "../CommentSection/Comments";

const Post = props => {
  return (
    <div className="postContainer">
      <div className="topContainer">
        <img
          className="companyLogo"
          src={props.post.thumbnailUrl}
          alt="Company Logo"
        />
        {props.post.username}
      </div>
      <div className="imgContainer">
        <img className="postImg" src={props.post.imageUrl} alt="Post" />
      </div>
      <div className="bottomContainer">
        <div className="contentContainer">
          <div className="iconContainer">
            <i className="far fa-heart" />
            <i className="far fa-comment" />
          </div>
          <div className="likes">
            <p>{props.post.likes} likes</p>
          </div>
          <div className="messContainer">
            <div>
              {props.post.comments.map(message => (
                <Message key={message.text} message={message} />
              ))}
            </div>
            <div className='timeStamp'>
              {props.post.timestamp}
            </div>
          </div>
          <div className="commentsContainer">
            <Comments />
          </div>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
      })
    )
  })
};

export default Post;
