import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSectionContainer';
import PostLikesSection from './PostLikesSection';
import styled, {css} from "styled-components";
 

const PostBorder = styled.div`
    border: 1px solid #d3d3d3;
    margin: 50px 0;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;
const PostImg = styled.img`
  width: 100%;
`;

const PostImgWrapper = styled.div`
    height: 100%;
    width: 100%;
`;


class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes
        };
    }

     incrementLike = () => {
        let likes = this.state.likes + 1;
        this.setState({ likes });
    };

    render() {
        return (
            <PostBorder>
                <PostHeader 
                username={this.props.post.username}
                thumbnailUrl={this.props.post.thumbnailUrl}
                />
                <PostImgWrapper>
                    <PostImg
                    src={this.props.post.imageUrl} 
                    alt="post-content"  
                    />
                
                </PostImgWrapper>
                <PostLikesSection 
                likes={this.state.likes}
                incrementLike={this.incrementLike}
                />

                <CommentSection
                comments={this.props.post.comments}
                />
            </PostBorder>
        )
    }
}

export default Post;