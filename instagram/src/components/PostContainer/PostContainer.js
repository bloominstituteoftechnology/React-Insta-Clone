import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

import CommentSection from '../CommentSection/CommentSection';

const StyledPost = styled.div`
    margin-bottom: 50px;
    width: 100%;
    border: 1px solid #eeeeee;
    border-radius: 5px;
    color: #333333;
`

const StyledPostHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`

const StyledHeaderThumbnail = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 15px 10px 10px 15px;
`

const StyledHeaderUsername = styled.h2`
    font-size: 1.5rem;
    line-height: 2rem;
    letter-spacing: 0.02rem;
    font-weight: bold;
`

const StyledPostContent = styled.div`

`

const StyledContentImage = styled.img`
    width: 100%;
`

const StyledSocialButtons = styled.p`
    margin: 10px 15px;
`

const StyledSocialButton = styled.a`
    font-size: 2.4rem;
    margin-right: 15px;
`

const StyledLikesCount = styled.p`
    margin-left: 15px;
    font-size: 1.4rem;
    letter-spacing: 0.02rem;
    font-weight: bold;
`


class PostContainer extends React.Component {

    handleLike = event => {
        event.preventDefault();
        this.props.addLike(this.props.postKey);
    }

    render() {
        return (
            <StyledPost>
                <StyledPostHeader>
                    <StyledHeaderThumbnail src={this.props.post.thumbnailUrl} alt="Thumbnail" />
                    <StyledHeaderUsername>{this.props.post.username}</StyledHeaderUsername>
                </StyledPostHeader>
                <StyledPostContent>
                    <StyledContentImage src={this.props.post.imageUrl} alt="Post" />
                    <StyledSocialButtons>
                        <StyledSocialButton onClick={this.handleLike}><i className="far fa-heart"></i></StyledSocialButton>
                        <StyledSocialButton><i className="far fa-comment fa-flip-horizontal"></i></StyledSocialButton>
                    </StyledSocialButtons>
                    <StyledLikesCount>{this.props.post.likes} likes</StyledLikesCount>
                </StyledPostContent>
                <CommentSection 
                    postKey={this.props.postKey} 
                    timestamp={this.props.post.timestamp} 
                    addNewComment={this.props.addNewComment} 
                    comments={this.props.post.comments} />
            </StyledPost>
        )
    }
}

PostContainer.propTypes = {
    postKey: PropTypes.number.isRequired,
    post: PropTypes.shape({
        thumbnailUrl: PropTypes.string,
        username: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.array
    }).isRequired,
    addNewComment: PropTypes.func,
};

PostContainer.defaultProps = {
    postKey: 0,
    post: {
        username: "username",
        thumbnailUrl: "https://virtual-strategy.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
        imageUrl: "http://wbomusic.com/image/cache/data/icon/No%20Image-1024x1024.png",
        likes: 0,
        timestame: Date.now(),
        comments: [],
    }
};

export default PostContainer;