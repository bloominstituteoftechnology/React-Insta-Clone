import React from 'react';
import CommentContainer from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';

const Post = props => {
    return (
        <div className='post-border'>
            <PostHeader
                username={props.post.username}
                thumbnailUrl={props.post.thumbnailUrl}
            />
            <div className='post-image-wrapper'>
                <img
                    alt='post thumbnail'
                    className='post-image'
                    src={props.post.imageUrl}
                />
            </div>
            <CommentContainer comments={props.post.comments} />
        </div>
    );
};

export default Post;