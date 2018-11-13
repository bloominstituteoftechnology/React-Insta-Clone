import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

function PostContainer(props){
    return(
        <section className='post'>
            <div className='post-content'>
                <div className='post-head'>
                    <img className='thumbnail' src={props.post.thumbnailUrl}></img><span>{props.post.username}</span>
                </div>
                <img src={props.post.imageUrl}/>
                <div className='interact-buttons'>
                    <div className='like-button'>heart</div>
                    <div className='comment-button'>bubble</div>
                </div>
                <span className='likes'>{props.post.likes} likes</span>
            </div>
            <CommentSection 
            comments = {props.post.comments}
            timestamp = {props.post.timestamp}
            />
        
        </section>
    ) 
}

export default PostContainer