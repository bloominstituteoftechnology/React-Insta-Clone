import React from 'react';
import PropTypes from 'prop-types'; 
import CommentList from '../CommentSection/CommentList.js';
import './Post.css';
import moment from 'moment';

const Post = (props) => {
    console.log(props);
    
let timestamp = moment(props.post.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow();
    
    return (
        <div className="post-container">
            <div className="post-header">
                <img className="post-user-avatar" src={props.post.thumbnailUrl}/>
                <div className="post-user">{props.post.username}</div>
            </div>
            <img className="post-img" src={props.post.imageUrl}/>
            <div className="likes-container">
                <div className="post-heart" onClick={() => { props.handleLike(props.post.timestamp) }}></div>
                <div className="post-bubble"></div>
            </div>
            <div className="likes-count">{props.post.likes} likes</div>
            <CommentList comments={props.post.comments}/>
            <div className="timestamp">{timestamp}</div>
        </div>
    )
}

Post.propTypes = {
    thumbnailUrl : PropTypes.string,
    username: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.string,
    comments: PropTypes.string,
}

export default Post;