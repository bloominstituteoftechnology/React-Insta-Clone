import React from 'react';
import PropTypes from "prop-types";
import Container from './Container';



const PostContainer = props => {
    console.log(props)
    return (
        <div>{props.posts.map( (post, index) => (
            <Container key={index} post={post} />
        ))}
        </div>
    )
}

PostContainer.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PostContainer;