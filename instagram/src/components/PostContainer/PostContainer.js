import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div className="posting">
            <div className="posting-header"><img src={props.post.thumbnailUrl} className="thumbnail" width="30"/>
            {props.post.username}
            </div>
            <img src={props.post.imageUrl}/>
            {props.post.comments.map(comment => <CommentSection comment={comment} />)}
        </div>
    );
}

export default PostContainer;
