import React, { Component } from 'react';
// import dummyData from './src/dummy-data';
import instagram from '../../instagram-brands.svg';

import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';
// import CommentSection from './CommentSection/CommentSection';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCompass, faHeart } from '@fortawesome/free-regular-svg-icons';

library.add(fab, faCompass, faSearch, faHeart);

const PostContainer = props => {
    return (
        <div className="post-container">
            <div className="post-header">
            {/* Works */}
                {props.data.map( post => (
                    <Post
                        key={post.username}
                        post={post}
                    />
                ))
                }
            </div>
            <div className="post-bottom">
            {/* Works */}
            {props.data.map( post => (
                    <CommentSection 
                        key={post.username}
                        post={post}
                    />
                ))
                }
                
            </div>

        </div>
    )
};

export default PostContainer;