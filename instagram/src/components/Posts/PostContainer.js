import React from 'react'
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container'

import './PostContainer.css'
import Post from "./Posts";


const PostContainer = (props) => {

    return (
        <Container className='post-container'>
            {props.data.map(element => {
                return <Post data={element} key={element.timestamp}/>
            })}
        </Container>
    )
};

PostContainer.propTypes = {
    data: PropTypes.array
};


export default PostContainer