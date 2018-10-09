import React from 'react';
import Comments from '../CommentSection/CommentSection';

const PostContainer = props =>{
    return(
            <div>
                <div className="post-header">
                    <img src={props.obj.thumbnailUrl} alt="User Profile Logo" />
                    
                    <h1>{props.obj.username}</h1>
                </div>
                <div className="post-img-container">
                    <img src={props.obj.imageUrl} alt={props.obj.username} />
                </div>
                <Comments commentArray={props.obj.comments} likes={props.obj.likes}/>
            </div>
    )
        
}
export default PostContainer;