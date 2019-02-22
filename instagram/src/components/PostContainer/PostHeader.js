import React from 'react';
import PropTypes from 'prop-types';
import {StyledPostHeader} from './StyledPosts';

const PostHeader = props => {
    return (
        <StyledPostHeader>
            <img src={props.thumbnail} alt={`${props.user}'s thumbnail.`} />
            <span>{props.user}</span>
        </StyledPostHeader>
    );
};

PostHeader.propTypes = {
    thumbnail: PropTypes.string,
    user: PropTypes.string
};

export default PostHeader;