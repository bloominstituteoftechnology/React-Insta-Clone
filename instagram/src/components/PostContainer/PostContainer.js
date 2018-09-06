import React, { Component } from 'react';
import PostHeader from './PostHeader';
import PostBanner from './PostBanner';
import PostFooter from './PostFooter';
import CommentSection from '../CommentSection/CommentSection';
import styled from "styled-components";
import './PostContainer.css'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 640px;
    width: 100%;
    margin: 0 auto;
    border: 1px solid #e6e6e6;
    margin-top: 20px;
    margin-bottom: 20px;
`;

// Handles the entire post component
class PostContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        likes: props.data.likes
      };
    }
  
    render() {
        return (
            <Container>
                <PostHeader thumbImg={this.props.data.thumbnailUrl} userN={this.props.data.username}/>
                <PostBanner bannerImg={this.props.data.imageUrl}/>
                <PostFooter likes={this.props.data.likes} />
                <CommentSection comments={this.props.data.comments} username={this.props.username}/>
            </Container>
        );
    }
}

export default PostContainer;