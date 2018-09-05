import React from 'react';
import Post from './Post.js';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection.js';

const PostContainer=prop=>{
    return (
        <div className="card">
            <Post data={prop.data} liked={prop.liked}/>
            <CommentSection comments={prop.data.comments} timestamp={prop.data.timestamp}/> 
        </div>
    )
}
PostContainer.propTypes={
    data: PropTypes.object.isRequired
  }
export default PostContainer;
