import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import Post from './Post'
import './Post.css'

const PostContainer = props =>{ 
    console.log(props.data)   
    return(
        <div className = "post-container">
            
            <Post 
                name = {props.data.username}
                thumbImg = {props.data.thumbnailUrl}
                mainImg = {props.data.imageUrl}
                likes = {props.data.likes}                
            />
            
            
            <CommentSection 
                data = {props.data}
            />
            
        </div>
    )         
}

export default PostContainer