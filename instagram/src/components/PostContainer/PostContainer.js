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
                thumbnail={props.data.thumbnailUrl}
                username={props.data.username} />
            <PostContent
                picture={props.data.imageUrl}
                likes={props.data.likes}
            />

            <CommentsContainer comments={props.data.comments} />
        </div>
    );
}

PostContainer.propTypes = {
    data: PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes: PropTypes.object.isRequired,

        comments: PropTypes.array,
    })
};
export default PostContainer;