import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection.js'
import styled from 'styled-components';

const PostContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px auto 20px auto;
    width: 600px;
`

const PostHeader = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
`

const PostThumbnail = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 100%;
    margin-right: 15px;
`

const PostImage =   styled.img`
    width: 600px;
    margin-top: 10px;
`

const PostButtons = styled.div`
    display: flex;
    width: 50px;
    margin-top: 10px;
    margin-left: 10px;
    justify-content: space-between;
`

const Likes = styled.div`
    margin-left: 10px;
    margin-top: 10px;
    font-size: 12px;
    font-weight: bold;
`



class PostContainer extends Component  {
    state = {
        heart1: "far fa-heart",
        heart2: "fas fa-heart hide",
        likes: 0,
    }
    componentDidMount() {
        this.setState((state)   =>  ({
            likes: this.props.likes
        }))
    }

    likePost = ()   =>  {
        this.setState((state)   =>  ({
            likes: this.state.likes + 1,
            heart1: "far fa-heart hide",
            heart2: "fas fa-heart",
        }))
    }

    unlikePost = () =>    {
        this.setState((state)   =>  ({
            likes: this.state.likes - 1,
            heart1: "far fa-heart",
            heart2: "fas fa-heart hide",
        }))
    }

    render()    {
        return(
            <PostContainerDiv>
                <PostHeader>
                    <PostThumbnail src={this.props.thumbnail} alt="User profile"/>
                    {this.props.username}
                </PostHeader>
                <PostImage src={this.props.image} alt="Post"/>
                <PostButtons>
                    <i className={this.state.heart1} onClick={this.likePost}></i>
                    <i className={this.state.heart2} onClick={this.unlikePost}></i>
                    <i className="far fa-comment"></i>
                </PostButtons>
                <Likes>
                    {this.state.likes} likes
                </Likes>
                <CommentSection timestamp={this.props.timestamp} content={this.props.comments}/>
            </PostContainerDiv>
        )
    }
}

PostContainer.propTypes =   {
    thumbnail: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired

}

export default PostContainer;
