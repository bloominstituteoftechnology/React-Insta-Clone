import React, {Component} from 'react';
import Comment from './Comment';
const CommentContainer = (props)=>{

        return (
            <div className='comment-container'>
            <Comment 
                username= {props.item.username}
                text= {props.item.text}
            />       
        </div>
    )}
    
        
;
           

export default CommentContainer;