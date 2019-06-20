import React from 'react';
import './CommentsSecFooter.css'
import './PostContainer.css';


const CommentsSecFooter = (props) => {

    return (
        // <div className= "commentsSecFooter-wrapper">
            {propscommentsSecFooter.map(item => {
                return (
                    <div className= "commentsSecFooter" >
                        <p className='timestamp'>{props.commentsSecFooter}</p>
                        <hr></hr>
                        <input className="addComment" placeholder="Add a comment..." />
                    </div>
                )
          

                    {/* <div className= "comments-section-wrapper-main">
            {props.comments.map(comment => {
                return (
                    <div className= "comments-section-wrapper">
                        <p><b>{comment.username}</b></p>
                        <p className= "comment-text">{comment.text}</p>
                    </div>
                )
            })}
        </div> */}
            
        {/* </div> */}
    )
}

export default CommentsSecFooter;