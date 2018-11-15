import React from 'react';
import { PostHeaderDiv, Avatar } from './StyledPostHeader';
import PropTypes from 'prop-types';

const PostHeader = props => {
    return(
        <PostHeaderDiv>
            <Avatar src={props.thumbnail} alt="User Avatar"/>
            <p>{props.userName}</p>
        </PostHeaderDiv>
    );
}

PostHeader.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
}

export default PostHeader;