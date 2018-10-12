import React, { Component } from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection.js';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Bold from '../Styles/Bold.js'

// styled post container components

const Container = styled.div`
    background-color: white;
    border-radius: 3px;
    border: 1px solid #E6E6E6;
    margin-bottom: 20px;
`

const PostHeader = styled.div`
    display: flex;
    align-items: center;
`

const Thumbnail = styled.img`
    height: 40px;
    border-radius: 50%;
    margin: 20px;
`

const PostOptionsContainer = styled.div`
    padding: 20px 20px 17px 20px;
`

// post container component

class PostContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            post: {},
            likes: 0,
            liked: false
        }
    }

    componentDidMount() {
        this.setState({
            post: this.props.postInfo,
            likes: this.props.postInfo.likes,
        })
    }

    //determine whether there are multiples "likes" or a single "like"

    checkLikes () {
        if (this.state.likes === 1) {
            return (
                <Bold>1 like</Bold>
            )
        }
        else {
            return (
                <Bold>{this.state.likes} likes</Bold>
            )
        }
    }

    //toggle post liking

    likePost = (e, prevState) => {
        e.preventDefault();
        let likes = this.state.post.likes;
        if (this.state.liked === false) {
            this.setState(prevState => ({
                likes: likes + 1,
                liked: !prevState.liked
            }))
            e.target.className = 'fas fa-heart fa-2x post liked'
        }
        else {
            this.setState(prevState => ({
                likes: likes,
                liked: !prevState.liked
            }))
            e.target.className = 'far fa-heart fa-2x post'
        }
    }

    render () {
        return (
            <Container>
                {/* post header */}
                <PostHeader>
                    <Thumbnail src={this.state.post.thumbnailUrl}/>
                    <Bold>{this.state.post.username}</Bold>
                </PostHeader>
                {/* image */}
                <img src={this.state.post.imageUrl}/>
                {/* like and comment buttons */}
                <PostOptionsContainer>
                    <div>
                        <i 
                            className="far fa-heart fa-2x post"
                            onClick={this.likePost}>
                        </i>
                        <i className="far fa-comment fa-2x"></i>
                    </div>
                    {this.checkLikes()}
                    <CommentSection data={this.props.postInfo}/>
                </PostOptionsContainer>
            </Container>
        )
    }
}

// check proptypes for post container

PostContainer.propTypes = {
    postInfo: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number
    }),
}

export default PostContainer;