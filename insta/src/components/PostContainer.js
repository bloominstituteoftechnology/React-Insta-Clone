import React from 'react';
import CommentSection from './CommentSection';
import Post from './Post';
import './Posts.css'

const PostContainer = props => {
    return (
        <div className='post-container'>
            {props.posts.map(post => (
                <div className='post-tunnel' key={post.timestamp}>
                    <Post post={post} />
                    <CommentSection comments={post.comments} likes={post.likes}/>
                </div>
            ))}
        </div>
    );
}

export default PostContainer;