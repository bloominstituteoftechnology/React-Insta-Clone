import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import AddComment from "../CommentSection/AddComment";
import './PostContainer.css';

const PostContainer = (props) => {
    return (
        
        <div className='post-container'>
            <div className='user-info'>
                {console.log(`This is happening in PostContainer ${props.user}`)}
                <img src={props.user.thumbnailUrl} alt='user thumbnail'/>
                {props.user.username}
            </div>
            <img src={props.user.imageUrl} alt='post pic'
                className='post-content'/>   
            {props.user.comments.map((comment, index) => {
                    return <CommentSection 
                        comment = {comment} 
                        key = {index}/>
            })}
            
            <AddComment />
        </div>
    )
}

export default PostContainer;

