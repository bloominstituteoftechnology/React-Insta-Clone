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
        <div className="comment-section-wrapper">
            <div className = "icons">
                        <img src="https://img.icons8.com/ios/50/000000/like.png" alt="like post"/>
                        <img src="https://img.icons8.com/ios/50/000000/speech-bubble.png" alt = "comment on post"/>
                    </div>
                

                    <div className="likes">
                        <strong>{props.likes} likes</strong>
                    </div>
            
            <CommentSect 
            time={props.timestamp}
            comments={props.comments}/>
        </div>
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