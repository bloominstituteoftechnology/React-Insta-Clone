import React from 'react';
import PropTypes from "prop-types";
import Container from './Container';
import styled from 'styled-components';

const PostContainerStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 600px;
margin-bottom: 200px;
`;



const PostContainer = props => {
    console.log(props)
    return (
        <PostContainerStyle>
        {props.posts.map( (post, index) => (
            <Container key={index} post={post} />
         
        ))}
        </PostContainerStyle>
    )
}

PostContainer.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PostContainer;