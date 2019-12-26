import React from 'react';

import CommentSection from '../CommentSection/CommentSection';

import './postContainer.css';

const PostContainer = props => {
    
    return(
        <div className="postContainer">
            <header>
                <img className="thumbnail" src={props.data.thumbnailUrl} alt="thumbnail" />
                <strong>{props.data.username}</strong>
            </header>
            <img className="postImg" src={props.data.imageUrl} alt="post" />
            <div className="postIcons">
                <i className="fa fa-heart" />
                <i className="fa fa-comment" />
            </div>
            <div className="likes">
                <p>{props.data.likes} likes</p>
            </div>
            <div className="comments">
                <CommentSection changeHandler={props.changeHandler} newComment={props.newComment} data={props.data.comments} />
            </div>
            
        </div>
    );
      
}

export default PostContainer;