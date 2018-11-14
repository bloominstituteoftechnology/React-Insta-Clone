import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import * as Icon from 'react-feather';

function PostContainer(props){
    return(
        <section className='post'>
            <div className='post-content'>
                <div className='post-head'>
                    <img className='thumbnail' src={props.post.thumbnailUrl}></img><span>{props.post.username}</span>
                </div>
                <img src={props.post.imageUrl}/>
                <div className='interact-buttons'>
                    <Icon.Heart className='like-button' />
                    <Icon.MessageCircle className='msg-button'/>
                </div>
                <div className='likes'>
                    <span className='num-likes'>{props.post.likes}</span>
                    <span>likes</span> 
                </div>
            </div>
            <CommentSection 
            user = {props.user}
            comments = {props.post.comments}
            timestamp = {props.post.timestamp}
            />
        
        </section>
    ) 
}

export default PostContainer