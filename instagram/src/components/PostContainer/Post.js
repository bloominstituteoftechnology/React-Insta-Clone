import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import styled from 'styled-components';

const Posts=styled.div`
    border: 1px solid #d3d3d3;
    margin: 5px 0;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

const PostHeader=styled.div`
    display: flex;
    align-items:center;
`;

const PostThumbnail=styled.img`
    border-radius: 30px;
    width: 10%;
    height: 50px;
    margin-left:3%;
`;

const PostUsername=styled.div`
    padding-left:3%;
    font-weight:bold;
`;

const PostImage=styled.img`
    width:100%;
`;

const PostIcons=styled.div`
    display:flex;
    padding:5px 0;
    align-items:center;
`;

const HeartWrap=styled.div`
    padding:0 2%;

    &:hover{
        color:red;
    }
`;

const Likes=styled.div`
    padding: 0 1.5%;
`;

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            likes: this.props.post.likes

        }
    }


    incrementLike = e => {
        e.preventDefault();
        this.setState({likes: this.state.likes + 1});
    };


    render() {
        return(
            <Posts>
                <PostHeader>
                    <PostThumbnail src={this.props.post.thumbnailUrl} alt={"User's Thumbnail"}/>
                    <PostUsername>{this.props.post.username}</PostUsername>
                </PostHeader>
                <PostImage src={this.props.post.imageUrl} alt={"User's Post"}/>
                <PostIcons>
                    <HeartWrap onClick={this.incrementLike}>
                        <i className="far fa-heart"></i>
                    </HeartWrap>
                    <i className="far fa-comment"></i>
                </PostIcons>
                <Likes>{this.state.likes} likes</Likes>
                <CommentSection comments={this.props.post.comments}/>
             </Posts>
        )
    }
}



export default Post;