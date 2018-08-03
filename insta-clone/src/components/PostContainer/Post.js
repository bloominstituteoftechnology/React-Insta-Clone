import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSectionContainer';
import PostLikesSection from './PostLikesSection';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostsImageWrapper = styled.div`
    height: 100%;
    width: 100%;
`;

const PostBorder = styled.div`
    border: 1px solid #d3d3d3;
    margin: 50px 0;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

const PostImage = styled.img`
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
            <PostsImageWrapper>
           
            <PostImage 
            src={this.props.post.imageUrl} 
            alt="post-content" 
            />
            
            </PostsImageWrapper>

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
};

Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string
    })
};

export default Post;