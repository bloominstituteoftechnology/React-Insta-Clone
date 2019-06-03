import React from 'react';
import Comments from '../CommentSection/CommentSection';
import styled from 'styled-components';

const PostWrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-itmes: center;
    padding-top: 100px;
`
const PostHeader = styled.div `
    border: 1px solid darkgrey;
    display:flex;
    align-items: center;
    height:100px
    >img{
        border-radius:50%;
        width:8%;
        margin: 20px 20px;
    }
    >h1{
        font-size: 1.4rem;
    }

`

const PostContainer = props =>{
    return(
            <PostWrapper>
                <PostHeader className="post-header">
                    <img src={props.obj.thumbnailUrl} alt="User Profile Logo" />
                    
                    <h1>{props.obj.username}</h1>
                </PostHeader>
                <div className="post-img-container">
                    <img src={props.obj.imageUrl} alt={props.obj.username} />
                </div>
                <Comments commentArray={props.obj.comments} likes={props.obj.likes}/>
            </PostWrapper>
    )
        
}
export default PostContainer;