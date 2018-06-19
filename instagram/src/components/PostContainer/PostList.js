import React from 'react';
import './Post.css';
import PostContainer from './PostContainer';

const PostList = (props) => {
    return (
        <div className='post-list-container'>
            {props.instaData.map(dataItem => {
                return <PostContainer dataItem = {dataItem}/>
            })}
        </div>
    );
}

export default PostList;