import React from 'react'
import PostContainer from '../PostContainer/PostContainer'
import Comment from './Comment'
import './CommentSection.css'


const CommentSection  = props => {

    return ( 

       <div className = "CommentSection">
          {props.comment.map (e => {
             return <Comment text={e}   />
          })}
          <div>
              
          <form>
              <button> Add Comment</button>
              <input type = 'text'>
              
               </input>
              
              
              
               </form>
 </div>
          

           
       </div>
  
     )
}
export default CommentSection