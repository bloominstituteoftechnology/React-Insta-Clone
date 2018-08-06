import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from './components/CommentSection/CommentSection';


const Post = props => {
    return(
        <div className="post-header">
            <PostHeader
                username={props.post.username}
                thumbnailUrl={props.post.thumbnailUrl}
            />
            <div>
                <img src={props.post.imageUrl} className="post-image" alt="image" />
            </div>
            <CommentSection comments={props.post.comment} />
        </div>
    );
};

export default Post;