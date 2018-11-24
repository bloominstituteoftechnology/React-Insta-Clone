import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css'
import Moment from 'react-moment';
import 'moment-timezone';
import Post from './Post';


const PostContainer = props => {
    return (
        <div className='instagram-card'>

            <div className='card-text'>
                <div>
                    {props.posts.map((p, index) =>
                    <Post 
                        key={p.imageUrl} 
                        post={p}
                        index={index}
                    />)}
                </div>
            </div>
        </div>
    )
}

export default PostContainer;