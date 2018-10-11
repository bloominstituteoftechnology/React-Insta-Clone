import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import LikePost from './LikePost';
import PostHeader from './PostHeader';


const Post = props => {
    return(
        <div className="post"> 
            <div className="thumbnail-profile">
                <img src={props.thumbnail} alt="thumbnail"/>
                <p>{props.username}</p>
            </div>

            <div className="image">
                <img src={props.image} alt="user-pic" />
            </div>
        </div>
    );
}

export default Post;
