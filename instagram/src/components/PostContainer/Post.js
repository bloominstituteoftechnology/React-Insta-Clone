import React from 'react';
import PropTypes from 'prop-types';
// import './PostContainer.css';


const Post = props => {
    
    return (
        
        <div className="post">
            <div className="post-author">
                <img src={props.post.post.thumbnailUrl} alt="profile" className="profile-img"/>
                {props.post.post.username}
            </div>
            <div className="post-image">
                <img src={props.post.post.imageUrl} alt="main-img" /> 
            </div>
            <div className="post-comments">
                
            </div>
        </div>
    )
}

Post.propTypes = {
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
}

export default Post;