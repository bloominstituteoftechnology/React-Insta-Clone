import React from 'react';
import CommentSection from "../CommentSection/CommentSection";
import LikeSection from "./LikeSection";

import styled from 'styled-components';

import Username from '../Styles/Reusable';

const PostContainerStyle = styled.div`
    background-color: white;
    border: 1px solid #E6E6E6;
    margin-bottom: 50px;
`

const ProfilePic = styled.img`
    border-radius: 50%;
    border: 1px solid black;
    height: 30px;
    margin: 0 10px 0 15px;
`

const PostImage = styled.img`
    width: 100%;
`

const PostHeader = styled.div`
    display: flex;
    align-items: center;
    height: 60px;
`

class Post extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            likes: props.post.likes,
            liked: false
        }
    }

   addLike = () => {
       if (this.state.liked === false) {
           let likes = this.state.likes + 1;
           this.setState({likes, liked: true})
       } else {
           let likes = this.state.likes - 1;
           this.setState({likes, liked: false})
       }
   }

    render(){
        return(
        <PostContainerStyle>
        <PostHeader>
        <ProfilePic src={this.props.post.thumbnailUrl} alt=""/>
        <Username>{this.props.post.username}</Username>
        </PostHeader>
        <div>
        <PostImage src={this.props.post.imageUrl} alt="" />
        </div>
        <LikeSection likes={this.state.likes} addLike={this.addLike} liked={this.state.liked}/>
        <CommentSection comments={this.props.post.comments} timestamp={this.props.post.timestamp} postId={this.props.post.imageUrl}/>
        </PostContainerStyle>
        )}
}



export default Post;