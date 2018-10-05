import React from 'react';
import Comments from '../CommentSection/CommentSection'

const PostContainer = props =>{
    return(
            <div>
                <div className="post-header">
                    <img src={props.obj.thumbnailUrl} alt="User Profile Logo" />
                    <h1>{props.obj.username}</h1>
                </div>
                <div className="post-img-container">
                    <img src={props.obj.imageUrl} alt="Post Image" />
                </div>
                <div>
                    <Comments commentArray={props.obj.comments}/>
                </div>
            </div>
    )
        
}
export default PostContainer;