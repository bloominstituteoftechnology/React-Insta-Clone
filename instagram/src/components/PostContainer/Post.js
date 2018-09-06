import React from 'react';
import CommentSection from '../CommentSection/CommentSectionContainer';
import PostHeader from './PostHeader';
import Like from './like.svg';

import './postContainer.css';
import styled from '../../../node_modules/styled-components';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes
        };
    }

    incrementLike = () => {
        let likes = this.state.likes + 1;
        this.setState({likes: likes });
    }; 

    render() {
        return (
            <Wrapper>
                <PostHeader 
                    username={this.props.post.username}
                    thumbnailUrl={this.props.post.thumbnailUrl}
                />
                <SubWrapper>
                    <Image
                    src={this.props.post.imageUrl} 
                    alt="post thumbnail"
                    />
                </SubWrapper>
                <LeftWrapper onClick={this.incrementLike}>
                    <Icon src={Like} alt="heart"/>
                    <H5>likes: {this.state.likes}</H5>
                </LeftWrapper>
                <CommentSection comments={this.props.post.comments} />
            </Wrapper>
        );
    };

}

const Wrapper = styled.div`
    border: 1px solid #d3d3d3;
    margin: 5px 0;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

const SubWrapper = styled.div`
`;

const LeftWrapper = styled.div`
    text-align: left;
    margin: 5px; 
`;

const Image = styled.img`
    width: 100%;
`;

const Icon = styled.img`
    width: 30px;
    height: 30px; 
`;

const H5 = styled.h5`
    font-size: 15px; 
`;

export default Post;