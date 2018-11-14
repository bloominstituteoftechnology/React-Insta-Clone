import React from 'react';
import { PropTypes } from 'prop-types';
import './PostBody.sass';

import CommentContainer from './../CommentSection/CommentContainer';
const PostBody = props => {
    return (
        <div className="post--body">
            <img src={props.post.imageUrl} alt="" />
            <CommentContainer likes={props.post.likes} comments={props.post.comments} />
        </div>
    );
};

CommentContainer.propTypes = {
    post: PropTypes.shape({
        imageUrl: PropTypes.string,
        likes: PropTypes.string
    })
};

export default PostBody;
