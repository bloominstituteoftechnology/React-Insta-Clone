import React from 'react';
import PropTypes from 'prop-types';
import styled from '../../../node_modules/styled-components';

const Image = styled.img`
    width: 97%;
    margin:0 1.5%;
`

const PostImage = props => <Image src={props.image} alt="Post" className="post-image" />

PostImage.propTypes = {
    image: PropTypes.string.isRequired
}

export default PostImage