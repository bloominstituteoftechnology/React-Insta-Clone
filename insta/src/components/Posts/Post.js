import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FlexColumnContainer from '../Styles/Reusables/FlexColumnContainer'

//Styles
const Thumbnail = styled.img `
    border-radius: 50%;
    width: 5%;
    height: 40px;
    margin: 0 10px;
`;

const Post = props => {
    return (
        <>
            <FlexColumnContainer>
                <Thumbnail src={props.post.thumbnailUrl} alt={'user'}></Thumbnail>
                <p>{props.post.username}</p>
            </FlexColumnContainer>
            <>
                <img className='img' src={props.post.imageUrl} alt={'post-img'}></img>
            </>
        </>
    );
};

//Tests
Post.propTypes = {
    post: PropTypes.object
}

export default Post;