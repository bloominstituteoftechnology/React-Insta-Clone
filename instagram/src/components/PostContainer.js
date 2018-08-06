import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from './CommentSection';

const PostContainer = props => {
    return (
        <div>
            {props.comments}
        </div>
    );
};

PostContainer.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
}

export default PostContainer;