import React from 'react';
import Post from './Post';

const PostContainer = props => {
    return (
        <div>
            {props.posts.map(eachPost => <Post key= {eachPost.imageUrl} post= {eachPost} />)}
        </div>
    );
};

export default PostContainer;