import React from 'react';

const Comments = props => {
    return (
        <div>
           {props.comments.map(i => {
              return <p className='comment' key={Math.random()}>{i.username}{i.text}</p>
          })}</div>

    )
}

export default Comments;