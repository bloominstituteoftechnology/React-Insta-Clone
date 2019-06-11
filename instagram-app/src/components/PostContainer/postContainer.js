import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid";
import "./postContainer.css";
import CommentSection from "../CommentSection/commentSection";


const PostContainer = (props) => {

    const {
        comments,
        imageUrl,
        likes,
        thumbnailUrl,
        timestamp,
        username
      } = props.data;


    return (
        <div className="postContainer">
         <div className="user-container">
           <img src={thumbnailUrl} alt="profile" />
            <p>{username}</p>
        </div>
      <img className="main_image" src={imageUrl} alt="banner" />
      <i className="far fa-heart" />
      <i className="far fa-comment" />
      <p className='likes'>{likes} likes</p>
      {comments.map(comment => {
        return <CommentSection key={uuid()} comment={comment} />;
      })}
      <p className="timestamp">{timestamp}</p>
      <div className="horizontal" />
      <div className='comment-bottom'>
              <input className="search" type="text" placeholder="Add a comment..." />
              <p className='three-dots'>&#8230;</p>
      </div>
    </div>
  );
};
    
PostContainer.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        comments: PropTypes.array.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        timestamp: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    })
}
export default PostContainer;