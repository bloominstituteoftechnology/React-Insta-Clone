import React from 'react';
import {PostHead} from '../Styles/PostStyles';
import './PostContainer.css';

const PostHeader = props => {
    return (
        <PostHead className="post-header">
            <div className="thumbnail">
                <img alt="profile" className="profile-picture" src={props.thumbnailUrl} />
            </div>
            <div className="username">
                <p>{props.username}</p>
            </div>
            <div className="timestamp">
                <p>{props.timestamp}</p>
            </div>
        </PostHead>
    );
};

export default PostHeader;