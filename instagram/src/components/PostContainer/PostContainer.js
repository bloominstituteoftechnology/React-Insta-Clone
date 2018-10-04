import React from 'react';

import CommentSection from '../CommentSection/CommentSection';
import Post from './Post';

const PostContainer = props => {
    return ( 
        <div>
            {props.posts.map(post => 
                <Post 
                key={post.timestamp} 
                post={post} 
                />
                )}
            <h1>I am a Post Container!</h1>
            <CommentSection />
        </div>
    );
}

export default PostContainer;