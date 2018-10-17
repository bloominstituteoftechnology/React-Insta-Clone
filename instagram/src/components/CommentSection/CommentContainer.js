import React from 'react';
import ReactDOM from 'react-dom';
import CommentSection from './CommentSection';
import './CommentContainer.css'
const CommentContainer = (props) => {
        return(
            <div className='CommentContainer'>
            
                {props.comments.map(comment => <div>
                        <div> 
                        
                        {comment.username}:
                        {' '}
                        {comment.text}
                        </div>
                        {/* <div> {comment.text}</div> */}
                   
                   
                </div>)}
            </div>
        )


}

   

export default CommentContainer