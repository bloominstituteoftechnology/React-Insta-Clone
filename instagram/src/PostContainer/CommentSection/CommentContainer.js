import React, {Component} from 'react';
import Comment from './Comment';
import NewComment from './NewComment';
const CommentContainer = (prop)=>{

        return (
            <div className='comment-container'>
            <Comment 
                username= {prop.item.username}
                text= {prop.item.text}
            />
            <NewComment 
            
            />        
        </div>
    )}
    
        
;
           

export default CommentContainer;