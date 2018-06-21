import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import styled from 'styled-components';
//import './Posts.css';

const PostBorder = styled.div`
border: 1px solid #d3d3d3;
margin: 5px 0;
box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

const PostImageWrapper = styled.div`
height: 100%;
width: 100%;
`;

const PostImage = styled.img`
width: 100%;
`;
class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state ={}

    }

    render() {
    return (
    <PostBorder>
      <PostHeader
        username={this.props.post.username}
        thumbnailUrl={this.props.post.thumbnailUrl}
      />
      <PostImageWrapper>
        <PostImage
          alt="post thumbnail"
          src={this.props.post.imageUrl}
        />
      </PostImageWrapper>
      <CommentSection comments={this.props.post.comments} 
                      postId={this.props.index} 
                      />
    </PostBorder>
    );
    }
}

export default Post;
