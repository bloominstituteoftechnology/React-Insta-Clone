import React from 'react';
import Comment from '../CommentSection/Comment';
import InputComment from '../CommentSection/InputComment';
import PropTypes from 'prop-types';


const Post = props => {

let comments = props.postData.comments.map((comment, index) => {
    return <Comment key={index} commentData={comment}/>; 
});


    return (
    <div className="post-wrapper">
        <div className="post-item">
            <div className="post-header">
                <img src={props.postData.thumbnailUrl} />
                <p className="post-text__bold">{props.postData.username}</p>
            </div>
            <img className="post-img" src={props.postData.imageUrl} />
            <div className="post-icons">
                <i className="far fa-heart"></i>
                <i className="far fa-comment"></i>
            </div>

            <p className="post-text__bold">{props.postData.likes} likes</p>

            <div className="post-comment">
                {comments}
            </div>
            <p className="timestamp">{props.postData.timestamp}</p>
            <InputComment username={props.postData.username} inputComment={props.inputComment} handleAddComment={props.handleAddComment} handleChange={props.handleChange}/>
        </div>
    </div>
    );
  };

  Post.propTypes = {
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.array,
  };


  
  export default Post;