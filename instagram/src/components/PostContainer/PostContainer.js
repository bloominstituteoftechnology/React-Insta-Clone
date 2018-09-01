import React from 'react';
import './postContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = (props) => {
    return (
        <div className="post">
            <div className="header">
                <img className="thumbnail" src={props.post.thumbnailUrl} alt="thumbnail"/>
                <h4>{props.post.username}</h4>
            </div>
            <img src={props.post.imageUrl} alt='image'/>
            <CommentSection comments={props.post.comments} post={props.post} moment={props.moment}/>
        </div>
    )
}


export default PostContainer;