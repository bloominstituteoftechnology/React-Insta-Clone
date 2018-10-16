import React from 'react';
import Post from './post';

const PostContainer = props => {
    return (
        <div>
            {props.dummyData.map((post) => {
                return (
                    <Post key={post.id} post={post} />
                ) 
            })}
                
        </div>
    )
}


export default PostContainer;