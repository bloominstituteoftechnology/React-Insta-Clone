import React from 'react';
import './PostHeader.css';
import {StyledPostHeader} from './PostContainerStyles';
import PropTypes from 'prop-types';


const PostHeader = props => {
    return (
        <StyledPostHeader>
            <img src={props.thumbnail} alt='' />
            <p>{props.user}</p>
        </StyledPostHeader>
    );
};

PostHeader.propTypes = {
    thumbnail: PropTypes.string,
    user: PropTypes.string,
};


export default PostHeader;