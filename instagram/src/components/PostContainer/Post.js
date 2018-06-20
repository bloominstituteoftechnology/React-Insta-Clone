import React from 'react';
import CommentSection from '../CommentSection/CommentSectionContainer';
import PostHeader from './PostHeader';

const Post = props => {
    return (
        <div>
            <PostHeader
                username={props.usersdata.username}
                thumbnailUrl={props.usersdata.thumbnailUrl}
            />

            <div className="instagram-image">
                <img src={props.usersdata.imageUrl} alt='main'/>
            </div>
    
            <div className="likes">
                {props.usersdata.likes}
            </div>
    
            <div className="comments">
                <CommentSection comments={props.usersdata.comments} />
            </div>
    
            <div className="timestamp">
                {props.usersdata.timestamp}
            </div>
    
        </div>
        )
    }

export default Post;