import React from 'react';
import './posts.css';
import PropTypes from 'prop-types';
import CommentSect from '../CommentSection/commentSect';


/*
receives data from posts.js:
    key={post.timestamp}
    user={post.username}
    thumbnail={post.thumbnailUrl}
    postImage={post.imageUrl}
    likes={post.likes}
    comments={post.comments}
    timestamp={post.timestamp}
*/

const Post = props => {
    return (
    <div className="post-section-wrap">

        <div className="post-header">
            <img className="thumbnail-img" src={props.thumbnail} alt="posting user's profile thumbnail    "/>
            <h3>{props.user}</h3>
        </div>

        <div className="post">
            <img className="post-image" src={props.postImage} alt="user posted"/>
        </div>
        
        <CommentSect 
        time={props.timestamp}
        comments={props.comments}
        likes={props.likes}/>
    </div>
    )
}

Post.propTypes = {
    postComments: PropTypes.shape({
        key: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    })
}

export default Post