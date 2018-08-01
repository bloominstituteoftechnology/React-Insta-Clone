import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types'; 


const PostContainer = props => {
    return(
        <div className="postcontainer">
            {props.instaPost.map(item => <Post liked={props.liked} addLike={props.addLike} post={item}/>)}
        </div>
    )
}

PostContainer.propTypes = {
    instaPost: PropTypes.arrayOf(PropTypes.object)
};

export default PostContainer;