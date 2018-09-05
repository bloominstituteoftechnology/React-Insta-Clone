import React from 'react';
import PropTypes from 'prop-types'
import PostContainer from './PostContainer'

// Check to make sure the types are correct
Posts.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
    }))
};

// Map the array and create a new Post for each post in the array
function Posts(props) {
    return (
        props.data.map(data => <PostContainer key={data.username} data={data} username={props.username}/>)
    )
};

export default Posts;