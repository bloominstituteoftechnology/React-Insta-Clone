import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function PostContainer(props) {
    return (
        props.postsProps.map((element) => {
            return <Post postProps={element} key={element.timestamp} />
        })
    )
}

PostContainer.propTypes = {
    postsProps: PropTypes.arrayOf(PropTypes.object)
}



export default PostContainer;
