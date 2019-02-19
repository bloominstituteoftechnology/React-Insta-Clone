import  React from 'react';
import './post-container.css';
import PropTypes from 'prop-types';

const PostContainer = props => {
    console.log(props);
}

PostContainer.propTypes = {
    dummy: PropTypes.arrayOf(PropTypes.shape({
        timestamp: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        username: PropTypes.string,
        imageUrl: PropTypes.string,
                                             }))};
export default PostContainer;