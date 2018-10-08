import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';



const PostContainer = (props) =>{
    return(
        <div className='wholePost'>
            <div className='titleBar'>
                <img src={props.post.thumbnailUrl} alt='' />
                <span>{props.post.username}</span>   
            </div>
            <div className='image'>
                <img src={props.post.imageUrl} alt=''/>    
            </div>
            <div className='comments'>
                <div>
                    <i className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                </div>
                <p>{props.post.likes} likes</p>
                <CommentSection comments={props.comments} timestamp={props.post.timestamp} />
            </div>
        </div>
    )
}



export default PostContainer

