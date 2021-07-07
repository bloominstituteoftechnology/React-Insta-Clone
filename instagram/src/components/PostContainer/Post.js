import React from 'react'
import CommentSection from '../CommentSection/CommentSection'
import '../CommentSection/CommentSection';
import styled from 'styled-components'

const StyledPost = styled.div`
    margin:5% 10%;
    border: 1px solid rgba(128, 128, 128,.4);
    border-radius: 5px;
    width: 640px;
`;

const PostHeader = styled.div`
    width: 640px;
    display: flex;
`;

const PostUserImage = styled.img`
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin: 20px;
`;

const PostUser = styled.h1`
    font-size: 20px;
    margin-top: 23px;
`;

const PostImage = styled.img`
    width: 640px;
`;

const Likes = styled.p`
    font-size: 16px;
    font-weight: bold;
`;

const CommentBottom = styled.div`
    padding: 10px;
`;

const LikeBar = styled.div`
    display: flex;
    width: 40%;
    justify-content: space-between;
    height: 20px;
`;

const HeartEmoji = styled.p`
    font-size: 30px;
    margin-top: 8px;
`;
class Post extends React.Component{
    constructor(props){
        super(props);
        this.state={
            likes: props.post.likes,
            user: props.user
        }
    }
    incrementLikes = () => {
        let likes = this.state.likes +1;
        this.setState({ likes});
    }
    render(){
        return (
            <StyledPost>
                <PostHeader>
                    <PostUserImage src={this.props.post.thumbnailUrl} alt=''/>
                    <PostUser>{this.props.post.username}</PostUser>
                </PostHeader>
                
            <div>
                <PostImage src={this.props.post.imageUrl} alt="" />
                <CommentBottom>
                    <LikeBar>
                        <Likes>{this.state.likes} likes</Likes>
                        <HeartEmoji onClick ={this.incrementLikes}>♡ </HeartEmoji>
                        <p>💬</p>
                    </LikeBar>
                </CommentBottom>
            </div>
                <CommentSection comments={this.props.post.comments} user={this.props.user} />
        </StyledPost>
        
        )
        }
 }
    

export default Post