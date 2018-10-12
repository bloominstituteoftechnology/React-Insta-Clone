import React from 'react';
import PropTypes from 'prop-types';
import styled from '../../../node_modules/styled-components';

const PostHeaderContainer = styled.div`
    width: 97%;
    margin: 10px 1.5% 0 1.5%;    
    height: 60px;
    display: flex;
    align-items: center;
`

const Thumbnail = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin: 0 15px;
`

const PostHeader = props => <PostHeaderContainer>
                                <Thumbnail src={props.thumbnail} alt="User Thumbnail" />
                                <strong>{props.username}</strong>
                            </PostHeaderContainer>

PostHeader.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
}                            

export default PostHeader