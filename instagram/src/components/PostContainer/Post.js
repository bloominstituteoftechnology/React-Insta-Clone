import React from 'react';
import CommentContainer from '../CommentsContainer/CommentContainer';

import PropTypes from 'prop-types';


const Post = props => {




    return (
    <div className="post-wrapper">
        <div className="post-item">
            <div className="post-header">
                <img src={props.postData.thumbnailUrl} />
                <p className="post-text__bold">{props.postData.username}</p>
            </div>
            <img className="post-img" src={props.postData.imageUrl} />
            
            <div className="post-comment">
                <CommentContainer comments={props.postData.comments} timestamp={props.postData.timestamp} likes={props.postData.likes}/>
            </div>
            
            
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