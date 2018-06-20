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
        <div><form onSubmit={props.addComment}>
            <input type='text'
            className='form'
            placeholder='Add a comment...'
            value={props.comment}
            onChange={props.handleComment}
            />
            </form>
    </div>
          
          </div>

    )
}

export default Comments;

/* value={props.comment}
            onChange={props.handleComment}*/