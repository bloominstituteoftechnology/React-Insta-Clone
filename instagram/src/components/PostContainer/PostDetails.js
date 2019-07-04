import React from 'react';
import PostHeader from './PostHeader.js';
import CommentSection from '../CommentSection/CommentSection.js';


const PostDetails = (props) => {
    
    return (
        <div>
            
            <PostHeader
                username={props.postDetail.username}
                thumbnailUrl={props.postDetail.thumbnailUrl}
            />
        
            <div>
                <img
                    alt="post thumbnail"
                    src={props.postDetail.imageUrl}
                />
            </div>
            
            <CommentSection comments = {props.postDetail.comments} />
        </div>
    )
}

export default PostDetails;