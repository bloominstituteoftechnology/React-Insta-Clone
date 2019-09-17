import React from 'react';

import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCompass, faHeart } from '@fortawesome/free-regular-svg-icons';

library.add(fab, faCompass, faHeart);



const PostContainer = props => {
    
    return (
        <div className="post-container">
                {/* {props.post.map( post => ( */}
                    <div className="post-content">
                        <Post
                            key={props.post.username}
                            post={props}
                        />
                        <CommentSection 
                            key={props.username}
                            post={props}
                        />
                    </div>
                {/* ))}  */}
        </div>
    )
};

export default PostContainer;