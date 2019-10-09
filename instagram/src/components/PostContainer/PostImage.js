import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Image = styled.img`
    width: 100%;
    height: auto;
`;

const PostImage = props => {
    return (
        <Image src={props.image} alt="post" />
    );
}

PostImage.propTypes = {
    image: PropTypes.string
}

export default PostImage;
