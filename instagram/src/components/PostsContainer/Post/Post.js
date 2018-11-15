import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from '../PostHeader/PostHeader';
import CommentSection from '../../CommentSection/CommentSection';
import LikeSection from '../LikesSection/LikesSection';
import './Post.css';
import styled from 'styled-components';

const PostContainer = styled.div`
    background-color: #FFFFFF;
    border: 1px solid lightgrey;
    width: 600px;
    margin: 0 auto;
    margin-bottom: 50px;
`;
const PostContentsImg = styled.img`
    width: 100%;
`;


class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes
        }
    }

    incrementLikes = () => {
        this.setState({
            likes: this.state.likes + 1
        }); 
    };

    render(){
        return (
            <PostContainer>
                <PostHeader username={this.props.post.username} thumbnailUrl={this.props.post.thumbnailUrl} />
    
                <div>
                    <PostContentsImg src={this.props.post.imageUrl} alt="post content" />
                </div>
    
                <LikeSection likes={this.state.likes} incrementLikes={this.incrementLikes} />
    
                <CommentSection comments={this.props.post.comments} />
            </PostContainer>
        )
    }
}


Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailURL: PropTypes.string,
        imageURL: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(
            PropTypes.shape({
                username: PropTypes.string,
                text: PropTypes.string
            })
        )
    })
}

export default Post;