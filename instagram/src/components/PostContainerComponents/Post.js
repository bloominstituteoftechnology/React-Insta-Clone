import React from 'react';
import Header from './Header';
import CommentSectionContainer from '../CommentSectionComponents/CommentSectionContainer';
import './Post.css';

const Post=(props)=> {
    return (
        <div className='post-div'>
            <div className='post-header'>
                <Header
                    username={props.post.username}
                    thumbnail={props.post.thumbnail}
                />
            </div>
            <div className='post-image'>
                <img src={props.post.imageUrl} className='image'/>
            </div>
           <CommentSectionContainer comment={props.post.comments} />
        </div>
    );
};

export default Post;