import React from 'react'
import moment from 'moment'

const CommentInput = (props) => {
  return (
    <div>
        <p className="date"> 
          {moment(props.timestamp, "MMMM Do YYYY, h:mm:ss a").fromNow()}
          </p>
        
    <form className = "comm-form" onSubmit={props.submitComment}>
        <input
        className= "comm-input"
        type="text"
        value={props.comment}
        placeholder= "Add comment..."
        onChange={props.changeComment}
            />

      
    </form>
    </div>
  )
}

export default CommentInput
