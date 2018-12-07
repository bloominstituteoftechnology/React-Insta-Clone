import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => (
    <div className="post">
        <div className="post-header">
            <img src={props.data.thumbnailUrl} alt="user thumbnail" draggable="false" />
            <h4>{props.data.username}</h4>
        </div>
        <div className='post-image'>
            <img src={props.data.imageUrl} alt="User post" draggable="false" />
            <div></div>
        </div>
        <CommentSection 
            comments={props.data.comments}
            likes={props.data.likes}
            time={props.data.timestamp}
            index={props.index}
            onNewComment={props.onNewComment}
            onDeleteComment={props.onDeleteComment}
        />
    </div>
);

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
    }),
    index: PropTypes.number,
    onNewComment: PropTypes.func,
    onDeleteComment: PropTypes.func,
};

export default PostContainer;