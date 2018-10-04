import React from 'react';
import CommentSection from './CommentSection';
import Post from './Post'

const PostContainer = props => {
    return (
        <div class='post-container'>
            {props.posts.map(post => (
                <div key={post.timestamp}>
                    <Post post={post} />
                    <CommentSection comments={post.comments} likes={post.likes}/>
                </div>
            ))}
            <input type='text' placeholder='Comment' />
        </div>
    );
}

export default PostContainer;