import React from 'react';
import './Comments.css';

const Comments = props => {
    return (
        <div>
            <div className='comments'>
           {props.comments.map(i => {
              return <p className='comment'><span className='user-comment' key={Math.random()}>{i.username} </span> 
              <span className='text-comment' key={Math.random()}>{i.text}</span></p>
          })}
          </div>
        <div>
            <input type='text'
            className='form'
            placeholder='Add a comment...'
            onChange={props.commentHandler}
            value={props.dataInput}
            onKeyDown={ (event) => {
                if(event.keyCode===13) {props.addComment}}}
            />
    </div>
          
          </div>

    )
}

export default Comments;