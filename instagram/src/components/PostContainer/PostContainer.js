import React from 'react';
import Post from './Post';

const PostContainer = (props) => {
    console.log("post container props", props);
    return(
        <div className="post-container">
            {props.data.map(post => <Post key={post.imageUrl} post={post} />)}
        </div>
    )
}
export default PostContainer;