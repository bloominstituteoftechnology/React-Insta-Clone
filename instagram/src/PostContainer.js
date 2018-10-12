import React from 'react';
import Comments from './Comments';
import PropTypes from 'prop-types';
import dummyData from './dummy-data';
import MakePost from './MakePost'

const PostContainer = props =>{
    return (
        <div className='post-container'>
             {props.posts.map(post => <MakePost key={post.timestamp} post={post} />)}
        </div>
    )
}


export default PostContainer;