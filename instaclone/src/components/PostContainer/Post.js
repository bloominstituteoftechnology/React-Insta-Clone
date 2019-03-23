import React from 'react';
import './Post.css';
import CommentSection from "../CommentSection/CommentSection";
import LikeSection from "./LikeSection";

import styled from 'styled-components';

const PostContainerStyle = styled.div`
    background-color: white;
    border: 1px solid #E6E6E6;
    margin-bottom: 50px;
`

class Post extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            likes: props.post.likes
        }
    }
    

    incrementLike = () => {
        let likes = this.state.likes + 1;
        this.setState({ likes })
    }

    render(){
        return(
        <PostContainerStyle>
        <div className="post-header">
        <img className="profile-pic" src={this.props.post.thumbnailUrl} alt=""/>
        <h3>{this.props.post.username}</h3>
        </div>
        <div className="post-image-container">
        <img className="post-image" src={this.props.post.imageUrl} alt="" />
        </div>
        <LikeSection likes={this.state.likes} incrementLike={this.incrementLike}/>
        <CommentSection comments={this.props.post.comments} />
        </PostContainerStyle>
        )}
}



export default Post;