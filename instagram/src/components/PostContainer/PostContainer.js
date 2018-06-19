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
                thumbnail={props.dataItem.thumbnailUrl}
                username={props.dataItem.username} />
            <PostContent
                picture={props.dataItem.imageUrl}
                likes={props.dataItem.likes}
            />

            <CommentsContainer comments={props.dataItem.comments} />
        </div>
    );
}

PostContainer.propTypes = {
    dataItem: PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes: PropTypes.object.isRequired,

        comments: PropTypes.array,
    })
};
export default PostContainer;