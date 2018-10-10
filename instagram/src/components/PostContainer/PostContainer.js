import React from 'react';
import PostPage from './PostPage';
import './PostContainer.css';


const PostContainer = props => {
    console.log('postcontainer',props)
    return (
        <div className='main-post'>
        <PostPage props={props}/>
        </div>
    )
}


export default PostContainer;