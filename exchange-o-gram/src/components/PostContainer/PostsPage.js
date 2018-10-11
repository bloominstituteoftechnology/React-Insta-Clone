import React from 'react';
import PostContainer from './PostContainer.js';
import styled from 'styled-components';
//import './PostContainer.css'

const PostsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const PostContainers = styled.div`
    width: 100%;
`;

class PostsPage extends React.Component{
    render(){
        return(
            <PostsContainer>
                {this.props.posts.map((post, index)=>{
                return(
                    <PostContainers key={post.timestamp}>
                        <PostContainer index={index} post={post} addLike={this.props.addLike} addNewComment={this.props.addNewComment} deleteComment={this.props.deleteComment}/>
                    </PostContainers>
                )
                })}
            </PostsContainer>
        )
        
    }
}

export default PostsPage;