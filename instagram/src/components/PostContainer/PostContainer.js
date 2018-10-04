import React from 'react';
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = (props) =>{
    return(
        <div className='wholePost'>
            <div className='titleBar'>
                <img src={props.post.thumbnailUrl} />
                <span>{props.post.username}</span>   
            </div>
            <div className='image'>
                <img src={props.post.imageUrl}/>    
            </div>
            <div className='Comments'>
                <div>
                    <i className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                </div>
                <p>{props.post.likes}</p>
                {props.post.comments.map(item =>{
                    return(
                    <CommentSection comments={item.text} user={item.username} />
                    )
                })}
                <p>{props.post.timestamp}</p>
            </div>
            <div className='addComment'>
                <p>Add a comment...</p>
                <i className="fas fa-ellipsis-h"></i>
            </div>
            
        </div>
    )
}

export default PostContainer