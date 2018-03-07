import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

const PostContainer = (props) => {
    const post = props.post;
    return (
    <div className="PostContainer">
        <div className="PostContainer__thumbnail">

            <img src={post.thumbnailUrl} />
            <span>{post.username}</span>
        </div>
        <div className="PostContainer__img">

        <img src={post.imageUrl} />
        </div>
        <div className="PostContainer__comments">



        </div>

    </div>
    );
}

export default PostContainer;