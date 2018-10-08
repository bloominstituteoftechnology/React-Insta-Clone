import React from 'react';
import PostHeader from './PostHeader';
import Likes from './Likes';

let PostContainer = props => {
    return (
        <div className="post">
            <PostHeader post={props.post}/>
            <img className="postImage" alt="post" src={props.post.imageUrl}></img>
            <Likes post={props.post}/>
        </div>
    )
}

export default PostContainer;