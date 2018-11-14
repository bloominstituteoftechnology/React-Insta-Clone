import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import "./post.css";

function PostContainer(props){
    return (
        <div className='post-content-container'>

            <div className='post-header-container'>
                <img className='profileImage' src={props.arg.thumbnailUrl} alt="userProfileImage"/>
                <p className='userName'>{props.arg.username}</p>
            </div>

            <div className='post-image-content'>
                <img src={props.arg.imageUrl} alt=""/>
            </div>

            <div className='below-post-container'>
                <div className='post-engagement-container'>
                    <div>
                        <img className='far fa-heart' src="#" alt="heartIcon"/>
                        <p><span>{props.arg.likes}</span> likes</p> 
                    </div>                
                    <img className='far fa-comment' src="#" alt="commentIcon"/>
                </div>

                <div className='post-comment-container'>
                    {props.arg.comments.map( com => {
                        return <CommentSection com={com}/>
                    })}
                </div>

                <div className='add-comment-container'>
                    <input type="text" placeholder='Add a comment . . .'/>
                </div>
            </div>
        </div>
        
    );
}

export default PostContainer;