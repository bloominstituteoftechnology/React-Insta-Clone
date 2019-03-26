import React from 'react'
import CommentSection from './CommentSection'

const PostContainer = (props) =>{
    // console.log(props)
    return(
        <div className = 'post-container'>
            {props.post.map( post=>
        
          <div className ="shook"key ={post.timestamp}>
            <div className = "profileName">
          <div className = "userinfo"><img className = "thumbimg"src = {post.thumbnailUrl} alt = 'fuck 12'></img> <h3>{post.username}</h3></div> </div>
          <div ><img className ="postimg"src = {post.imageUrl} alt = "fuck 12"></img></div>
          
          <div className =" interactions">
          <i class="far fa-heart"></i>
          <i class="far fa-comment"></i>
          </div>
          <div>
          <div className ="likes"><p>{post.likes}  Likes</p></div>
          </div>
          <CommentSection comment = {post.comments}/>
          </div>
                
            )}
          </div>  
       
    )
    
    
        }
export default PostContainer;