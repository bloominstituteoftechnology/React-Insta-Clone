import React from 'react';
import { PropTypes } from 'prop-types';

import CommentContainer from './../CommentSection/CommentContainer';
const PostBody = props => {
    return (
        <>
            <img src={props.post.imageUrl} alt="" />
            <CommentContainer likes={props.post.likes} comments={props.post.comments} />
        </>
    );
};

CommentContainer.propTypes = {
    post: PropTypes.shape({
        imageUrl: PropTypes.string,
        likes: PropTypes.string
    })
};

export default PostBody;
