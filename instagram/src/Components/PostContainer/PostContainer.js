import React from 'react';
import Post from './Post';

const PostContainer = (props) => {
    return (
        <div>
           {props.instagramData.map(post =>{
               return <Post post ={post} key = {post.username} />
           })}

        </div>
    );
};


export default PostContainer;