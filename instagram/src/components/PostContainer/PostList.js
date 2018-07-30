import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post.js';

const PostList = (props) => {
    console.log(props.postData);
    
    return (
        <div className="comment-list-container">
       { 
           props.postData.map((post)=>{
                return <Post key={post.timestamp} post={post}/>
            })
        }
        </div>
    )
}

export default PostList;