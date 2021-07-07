import React from 'react';
import './Posts.css';
import {LikesNuserName} from './StyledPosts'

const PostHeader = props => {
    return (
        <div className="post-header">
            <img alt="user-thumbnail" 
                 className="user-picture" 
                 src={props.thumbnailUrl}>
            </img>
            <LikesNuserName>
                {props.username}
            </LikesNuserName>
        </div>
    )
}

export default PostHeader;