import React from 'react';
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection';



const PostContainer = (props) => {
    return (
        <div className='post-container'>
            <div className='post-head'>
                <img src={props.data.thumbnailUrl} />
                <p> <span>{props.data.username}</span></p>
            </div>
            <div className='post-img'>
                <img src={props.data.imageUrl}/> 
            </div>
            <CommentSection data={props.data}/>
        </div>
    );
}

export default PostContainer;

