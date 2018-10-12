import React, { Component } from 'react';
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

const Img = styled.img `
    width: 100%;
`;

class Post extends Component {
    render() {
        return (
            <>
                <FlexColumnContainer>
                    <Thumbnail src={this.props.post.thumbnailUrl} alt={'user'}></Thumbnail>
                    <p>{this.props.post.username}</p>
                </FlexColumnContainer>
                <>
                    <Img src={this.props.post.imageUrl} alt={'post-img'}></Img>
                </>
            </>
        );
    }
}

//Tests
Post.propTypes = {
    post: PropTypes.object
}

export default Post;