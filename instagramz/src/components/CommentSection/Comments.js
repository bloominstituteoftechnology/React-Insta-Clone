import React from 'react';



function Comments (props) {
    return ( 
        <div>
            <div className="comments">
                <h1>{props.comment.username}</h1>
                <h2>{props.comment.text}</h2>
            </div>

                      
      </div>
           
        
    )
}



export default Comments;