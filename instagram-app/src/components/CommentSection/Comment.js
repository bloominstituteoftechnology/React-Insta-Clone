import React from 'react'


const Comment = props =>{
  
     return (
       <div className = 'Comment'>
           <p>{props.text.username} </p>
           <p> {props.text.text}</p>
            </div>


     )


}


export default Comment