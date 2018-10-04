import React from 'react';

import PostHeader from './PostHeader';

const Post = props => {
    return ( 
        <div>
            <PostHeader 
            username={props.post.username}
            thumbnailUrl={props.post.thumbnailUrl}
            />
            
            <img 
            src={props.post.imageUrl} alt="post-image" 
            />

            
        </div>
    );
}

export default Post;