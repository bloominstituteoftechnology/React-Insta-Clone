import React, {Component} from 'react';
import Comment from './Comment';
import NewComment from './NewComment';
const CommentContainer = (props)=>{
    return(props.data.map((item)=>{
        return (
            <div className='comment-container'>
            <Comment 
            
            />
            <NewComment 
            
            />        
        </div>
        )
    } 
    )
    );
           
}
export default CommentContainer;