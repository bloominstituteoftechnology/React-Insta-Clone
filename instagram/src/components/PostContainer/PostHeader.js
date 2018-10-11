import PropTypes from 'prop-types';
import {StyledPostHeader, StyledThumbnail, PostUsername} from '../Styles/Styles';
import React from 'react';
import './PostContainer.css'

const PostHeader = props => {
    return (
        <div>
            <StyledPostHeader>
            <StyledThumbnail 
            alt='profile pic'
            src={props.thumbnailUrl}
            />
            <PostUsername>
            {props.username}
            </PostUsername>
            </StyledPostHeader>
        </div>
    )
}

PropTypes.PostHeader = {
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string
}

export default PostHeader;