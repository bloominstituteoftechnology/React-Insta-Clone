import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';


const Post = props => {
    return (
        <div className='postMain'>
            <PostHeader thumbnailUrl={props.post.thumbnailUrl} username={props.post.username} />
            <img className='postImg' src={props.post.imageUrl} />
            <CommentSection  comments={props.post.comments} />
        </div>
    )
}

export default Post;