import React, { Component } from 'react';
import PostHeader from "./PostHeader";
import LikeSection from "./LikeSection";
import CommentSection from "../CommentSection/CommentSection";
import styled from 'styled-components';


/*
Passed as props from PostContainer.js

key={ p.imageUrl } 
post={p}

*/
// Styles using 'styled-components'
const PostContainer = styled.div`
    width: 60%;   
    margin: 0 auto;
    text-align: center;
`
const CommentContainer = styled.div`
    border: 1.5px solid #e6e6e6;
    margin-top: -5px;
    text-align: left;
    padding: 10px 20px 5px;

`
const Img = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 0;
`

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes
        }
    }

    incrementLikes = () => {
        const likeAdd = this.state.likes + 1
        this.setState({
            likes: likeAdd
        })
    }

    render() {
        return(
            <PostContainer>
                <PostHeader 
                    username = {this.props.post.username}
                    thumbnailUrl = {this.props.post.thumbnailUrl}
                />

                <div>
                    <Img src={this.props.post.imageUrl} alt="user posted" />
                </div>

                <CommentContainer>

                    <LikeSection 
                        likes = {this.state.likes}
                        incrementLikes = {this.incrementLikes} 
                    />

                    <CommentSection
                        postKey = {this.props.post.imageUrl} 
                        comments = {this.props.post.comments}
                    />

                </CommentContainer>
            </PostContainer>
        )
    }
}

export default Post