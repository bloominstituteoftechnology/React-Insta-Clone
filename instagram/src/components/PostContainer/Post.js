import React from 'react';

const Post = props => {
    return ( 
        <div>
            <img src={props.post.imageUrl} alt="post-image"/>
        </div>
    );
}

export default Post;