import React from 'react';
import CommentSection from './CommentSection';
import PropTypes from 'prop-types';

const Post = (props) => {
    return (
        <div >
            <img src = {props.userName.thumbnailUrl} alt = 'user profile'/>
            <p>{props.userName.username}</p>
            <img src = {props.userName.imageUrl} alt ='user post' />
            <CommentSection key = {props.userName.timestamp} comment ={props.userName.comments} />
            
        </div>
    );
}

Post.propTypes = {
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.shape({
        username:PropTypes.string,
        text: PropTypes.string
    }))
}


export default Post;

