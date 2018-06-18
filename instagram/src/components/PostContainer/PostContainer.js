import React from 'react';
import Post from './Post';

const PostContainer = props => {
    return (
        <div className='post-containers'>
            {props.data.map(data => <Post key={Math.random()} data={data} />)}
        </div>);
}

export default PostContainer;