import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection'
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome';

const Post = props => {
    return (
        <div>
            {/* TOP SECTION OF POST */}
            <div className="post-top">
                <img src={props.post.thumbnailUrl} alt="post thumbnail" className="user-thumbnail"/> 
                <h4 className="post-username">{props.post.username}</h4>
            </div>

            {/* IMAGE SECTION */}
            <div className="image-container">
                <img src={props.post.imageUrl} alt="post display" className="post-image"/> 
            </div>

            {/* LIKES SECTION */}
            <FontAwesomeIcon icon="heart" className="heart-icon"/>
            <FontAwesomeIcon icon="comment" />
            <div className="like-container">{props.post.likes} likes</div>

            <CommentSection comments={props.post.comments} />
        </div>
        

    );
}

export default Post;