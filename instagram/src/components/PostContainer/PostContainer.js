import React from 'react';
import PropTypes from 'prop-types'
import PostHeader from './PostHeader';
import PostBanner from './PostBanner';
import PostFooter from './PostFooter';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css'

// Check to make sure the types are correct
PostContainer.propTypes = {
    data: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string,
        })),
    })
};

// Create each PostContianer element
function PostContainer (props) {
    return (
        <div className="post-container">
            <PostHeader thumbImg={props.data.thumbnailUrl} userN={props.data.username}/>
            <PostBanner bannerImg={props.data.imageUrl}/>
            <PostFooter likes={props.data.likes}/>
            <CommentSection comments={props.data.comments}/>
        </div>
    )
};

export default PostContainer;