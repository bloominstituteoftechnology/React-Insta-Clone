import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return <CommentSection comments={props.obj.comments} />
}

PostContainer.propTypes = {
    obj: PropTypes.shape ({
        id: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        timestamp: PropTypes.string.isRequired,
        comments: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))

    })
}
export default PostContainer;