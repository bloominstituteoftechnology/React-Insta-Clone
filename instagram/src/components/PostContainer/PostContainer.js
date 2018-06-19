import React from 'react';
import './Post.css';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import CommentsContainer from '../CommentSection/CommentsContainer';
import PropTypes from 'prop-types';

const PostContainer = (props) => {
    return (
        <div className='post-container'>
            <PostHeader
                thumbnailUrl={props.dataItem.thumbnailUrl}
                username={props.dataItem.username} />
            <PostContent
                imageUrl={props.dataItem.imageUrl}
                likes={props.dataItem.likes}
            />

            <CommentsContainer comments={props.dataItem.comments}
                changeCommentHandler={props.changeCommentHandler}
                addCommentHandler={props.addCommentHandler}
                index = {props.index} />
        </div>
    );
}

PostContainer.propTypes = {
    dataItem: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        comments: PropTypes.array,
    })
};
export default PostContainer;