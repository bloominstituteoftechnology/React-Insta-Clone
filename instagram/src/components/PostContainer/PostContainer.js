import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css'
// import moment from 'moment';
import Moment from 'react-moment';
import 'moment-timezone';
import Post from './Post';

const PostContainer = props => {
    return (
        <div className='instagram-card'>

            <div className='card-text'>
                <div>
                    {props.posts.map(p => 
                    <Post 
                        key={p.imageUrl} 
                        post={p}
                    />)}
                    {/* Here we send state data one by one to Post */}
                </div>
            </div>
        </div>
    )
}

export default PostContainer;