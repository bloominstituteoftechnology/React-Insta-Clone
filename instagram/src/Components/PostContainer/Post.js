import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import PostHeader from './PostHeader';
import PostContent from './PostContent';

const Post = ({content}) => {
    return (
        <div className="post">
            <PostHeader 
                thumbnail={content.thumbnailUrl}
                username={content.username}
            />
            <PostContent url={content.imageUrl} />
            <CommentSection 
                likes={content.likes}
                timestamp={content.timestamp}
                comments={content.comments}
            />
        </div>
    );
}

export default Post;
