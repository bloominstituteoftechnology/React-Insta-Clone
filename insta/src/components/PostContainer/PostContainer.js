import React from 'react';
import Comments from '../CommentSection/CommentSection';
import styled from 'styled-components';

const PostWrapper = styled.div `
    display: flex;
    flex-direction: coloumn;
`

const PostContainer = props =>{
    return(
            <PostWrapper>
                <div className="post-header">
                    <img src={props.obj.thumbnailUrl} alt="User Profile Logo" />
                    
                    <h1>{props.obj.username}</h1>
                </div>
                <div className="post-img-container">
                    <img src={props.obj.imageUrl} alt={props.obj.username} />
                </div>
                <Comments commentArray={props.obj.comments} likes={props.obj.likes}/>
            </PostWrapper>
    )
        
}
export default PostContainer;