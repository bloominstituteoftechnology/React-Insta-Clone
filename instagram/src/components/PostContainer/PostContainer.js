import React from 'react';
import CommentSection from '../CommentSection/CommentSection';




const PostContainer = (props) =>{




        return (
            <div>
                <h1>{props.postData.username}</h1>
                <img src={props.postData.imageUrl}/>
                
                
                <CommentSection comments={props.postData.comments}/>
            </div>
        )
    
}

export default PostContainer;
