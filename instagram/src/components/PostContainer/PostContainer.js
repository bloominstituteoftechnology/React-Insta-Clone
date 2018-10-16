import React from 'react';
import CommentSection from '../CommentSection/commentSection';
import './postContainer.css';

const PostContainer = props => {
    return (
        <div className = 'postContainer'>
        {props.dummyData.map (data => {
            return (
                <div className = 'posts'>
                    <div className = 'thumbName'>
                        <img clasName = 'thumbnail' src ={data.thumbnailUrl}/>
                        <p><strong>{data.username}</strong></p>
                    </div>
                    <img src ={data.imageUrl}/>
                    <p>{data.likes} likes</p>
                    <p>{data.timestamp}</p>
                    <CommentSection item={data}/>
                </div>  
            )
        }
        )}
        </div> 
    )
}
 
export default PostContainer;