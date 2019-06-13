import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import LikeSection from './LikeSection';
import styled from 'styled-components';

const PostContainer = styled.div`
margin: 15px 0;
border: 1px solid lightgray;

`;

const PostImage = styled.img`
width: 100%;
`;

const ThumbnailImage = styled.img` 
height: 30px;
width: 30px;
`;

const UserName = styled.span`
font-weight: 300;
font-size: 10px;
`;

class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            likes: props.post.likes
        };
    }

    incrementLikes() {
        let likes = this.state.likes + 1;
        this.setState({likes});
    }; 

    render() {
        return (
            <PostContainer>
                <ThumbnailImage
                  alt=""
                  src={this.props.post.thumbnailUrl}
                />
                <UserName>{this.props.post.username}</UserName>
                <br/>
                <PostImage
                  alt=""
                  src={this.props.post.imageUrl}
                />

                <LikeSection
                  incrementLikes={this.incrementLikes}
                  likes={this.state.likes}
                />
                <CommentSection
                  comments={this.props.post.comments}
                />
            </PostContainer>
        )
    }

    }

    Post.propTypes = {
        post: PropTypes.shape({
          username: PropTypes.string,
          thumbnailUrl: PropTypes.string,
          imageUrl: PropTypes.string
        })
      };
      
      export default Post;