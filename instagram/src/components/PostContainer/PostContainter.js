import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types'; 


const PostContainer = props => {
    return(
        <div>
            {props.instaPost.map(item => <Post post={item}/>)}
        </div>
    )
}

PostContainer.propTypes = {
    instaPost: PropTypes.arrayOf(PropTypes.object)
};

export default PostContainer;