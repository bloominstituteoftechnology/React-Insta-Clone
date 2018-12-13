import React from 'react';
import PropTypes from "prop-types";
import Container from './Container';
import './post.css';


const PostContainer = props => {
    console.log(props)
    return (
        <div>{props.posts.map( (post, index) => (
            <Container key={index} post={post} />
        ))}
        </div>
    )
}

export default PostContainer;