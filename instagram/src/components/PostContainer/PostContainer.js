import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';

const PostContainer = props => {
    return (
        <div>
            {props.data.map(post => (
                <Post key={Math.random()} post={post} />
            ))}
        </div>
    );
};

PostContainer.propTypes = {
    PostContainer: PropTypes.arrayOf(PropTypes.object),
}

export default PostContainer;