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
    postProps: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        comments: PropTypes.arrayOf(PropTypes.objects),
    })
}

export default PostContainer;
