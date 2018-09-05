import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function PostContainer(props) {
    return(
        <div>
            {props.posts.map((post, index) => {
                return(
                    <div key={index}>
                        <Post
                            post = {post}
                        />
                    </div>
                )
            })}
        </div>
    )
}

PostContainer.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object).isRequired
  };

export default PostContainer;