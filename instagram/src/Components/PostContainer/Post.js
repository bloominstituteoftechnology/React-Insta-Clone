import React from 'react';
import PropTypes from 'prop-types';
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

Post.propTypes = {
    content: PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        timestamp: PropTypes.string.isRequired,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })),
    }),
}