import React from 'react';
// import PostContainer from './PostContainer';
import PropTypes from 'prop-types';



const Container = props => {
 
    return (
        <div>
            {props.post.id} {props.post.username} {props.post.thumbnailUrl} 
            {props.post.likes} {props.post.timestamp}
        </div>
    )
}

Container.propTypes = {
    post: PropTypes.shape({
        index: PropTypes.number,
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        // comments: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
        // comments: PropTypes.arrayOf(PropTypes.string)
    })
}

export default Container;