import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import Post from './Post'
import './Post.css'
import styled from 'styled-components';

const PostWrap = styled.div`
    width: 100%;
    margin: 0 auto;
    border: 1px solid lightgray;
    border-radius: 5px;
    margin-bottom: 40px;
    box-shadow: 5px 7px 5px rgba(131, 131, 131, 0.459);
    max-width: 640px;
`

class PostContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            likes: props.data.likes,
            data: props.data
        }
    }

    plusLikes = () =>{        
        this.setState({likes : this.state.likes+1})
    }

    render(){       
    return(
        <PostWrap>
            
            <Post 
                name = {this.state.data.username}
                thumbImg = {this.state.data.thumbnailUrl}
                mainImg = {this.state.data.imageUrl}
                likes = {this.state.likes}    
                handleAddLike = {this.plusLikes}            
            />
            
            
            <CommentSection 
                data = {this.state.data}
            />
            
        </PostWrap>
    )}
}

export default PostContainer