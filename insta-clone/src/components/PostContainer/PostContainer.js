import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

const PostContainer = props => {
    return (
        props.data.map((post, index) => {
            return <div key={index + 1} >
                <Post
                    {...props}
                    postdata={post}
                    postIndex={index}
                />
              </div>;
        })
    )
};

PostContainer.propTypes = {
    data: PropTypes.array.isRequired
}

export default PostContainer;