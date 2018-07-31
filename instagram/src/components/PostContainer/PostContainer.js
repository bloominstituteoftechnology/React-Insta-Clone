import React from 'react';
import Post from './Post.js';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection.js';

const PostContainer=prop=>{
    return (
        <div className="card">
            <Post data={prop.data}/>
            <CommentSection data={prop.data.comments} timestamp={prop.data.timestamp}/>   
        </div>
    )
}
export default PostContainer;