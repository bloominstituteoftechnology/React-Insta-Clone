import React from 'react'
import CommentSection from './CommentSection'

const PostContainer = (props) =>{
    // console.log(props)
    return(
        <div className = 'post-container'>
            {props.post.map( post=>
        
          <div key ={post.timestamp}>

          <img className = "thumbimg"src = {post.thumbnailUrl} alt = 'fuck 12'></img> <span>{post.username}</span>
          <div ><img className ="postimg"src = {post.imageUrl} alt = "fuck 12"></img></div>
          <div className =" interactions">
          <i class="far fa-heart"></i>
          <i class="far fa-comment"></i>
          <div><p>{post.likes}</p></div>
          </div>
          <CommentSection comment = {post.comments}/>
          </div>
                
            )}
          </div>  
       
    )
    
    
        }
export default PostContainer;