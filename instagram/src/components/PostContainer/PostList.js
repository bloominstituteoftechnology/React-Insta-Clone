import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post.js';

const PostList = (props) => {
    console.log(props.postData);
    
    return (
        <div className="post-list-container">
       { 
           props.postData.map((post)=>{
                return <Post key={post.timestamp} post={post}/>
            })
        }
        </div>
    )
}

PostList.propTypes = {
    postData: PropTypes.arrayOf(PropTypes.object)
}

export default PostList;