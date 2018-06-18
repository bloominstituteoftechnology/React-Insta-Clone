import React from 'react';

const Comments = props => {
    return (
        <div>
           {props.comments.map(i => {
              return <p className='comment'><span className='user-comment' key={Math.random()}>{i.username}: </span> 
              <span className='text-comment' key={Math.random()}>{i.text}</span></p>
          })}
        <div>
            <input type='text'
            className='form'
            placeholder='Add a comment'
            onChange={props.toDoHandler}
            value={props.dataInput}/>
    </div>
          
          </div>

    )
}

export default Comments;