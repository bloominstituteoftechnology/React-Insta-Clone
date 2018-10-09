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
                <div>
                    <div>
                        <i className="far fa-heart fa-2x "></i>
                        <i className="far fa-comment fa-2x fa-flip-horizontal"></i>
                    </div>
                    <div>
                        <h3>{props.obj.likes} likes</h3>
                    </div>
                    <Comments commentArray={props.obj.comments}/>
                </div>
            </div>
    )
        
}
export default PostContainer;