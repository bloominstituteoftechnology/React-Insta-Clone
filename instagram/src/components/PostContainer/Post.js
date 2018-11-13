import React, { Component } from 'react';
// import dummyData from './src/dummy-data';
import instagram from '../../instagram-brands.svg';

import CommentSection from '../CommentSection/CommentSection';
// import CommentSection from './CommentSection/CommentSection';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCompass, faHeart } from '@fortawesome/free-regular-svg-icons';

const Post = props => {
    return (
        <div className="post">
            <div className="post-author">
                {props.post.username}
                <img src={props.post.thumbnailUrl} alt="profile image" className="profile-img"/>
            </div>
            <div className="post-image">
                <img src={props.post.imageUrl} alt="main-img" /> 
            </div>
        </div>
    )
}


export default Post;