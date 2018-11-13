import React, { Component } from 'react';

import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCompass, faHeart } from '@fortawesome/free-regular-svg-icons';

library.add(fab, faCompass, faSearch, faHeart);

const PostContainer = props => {
    return (
        <div className="post-container">
            <div className="post-content">
            {/* Works */}
                {props.data.map( post => (
                    <div>
                        <Post
                            key={post.username}
                            post={post}
                        />
                        <CommentSection 
                            key={post.username}
                            post={post}
                        />
                    </div>
                ))
                }
            </div>
            <div className="post-bottom">
            
                
            </div>

        </div>
    )
};

export default PostContainer;