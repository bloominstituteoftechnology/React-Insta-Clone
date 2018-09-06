import PostContainer from "../PostContainer/PostContainer";
import React, { Component } from 'react';
import PropTypes from "prop-types"
import styled from "styled-components"


CommentSection.propTypes = {
    username: PropTypes.string,
    likes: PropTypes.number,    
}

const CommentSectionDiv = styled.section`  
    
` 



const UsernameThumbnail = styled.img `
    max-width: 30px;
    max-height:30px
`
const Header = styled.header `
 display:flex;
    align-self: baseline
`

function CommentSection (props) {     
    
    return (
        <CommentSectionDiv>
            <Header>
                
                    <UsernameThumbnail src = {props.data.thumbnailUrl}/>
                
                <div>
                    <h4>{props.data.username}:</h4>
                </div>
                
                
            </Header>
            <img src={props.data.imageUrl}/>
            <p className= 'likes'>{props.data.likes + ' likes'}</p>

            <div>
                {props.data.comments.map(comment => <PostContainer comment = {comment}/>)}                
                <input value = {props.value} onChange = {props.handleCommentInput}/>
                <button onClick = {props.addComment} id={props.data.id}>Add Comment</button>
                <button onClick = {props.likePost} id={props.data.id}>Like Post</button>
            </div>

            {/* <div>
                <input onChange = {props.handleInput}/>    
                <button onClick = {props.addComment} type = 'button'>Sumbit Comment</button>
            </div>     */}
        </CommentSectionDiv>
    )
}
    
export default CommentSection;