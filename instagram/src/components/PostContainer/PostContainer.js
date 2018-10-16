import React from 'react'
import './PostContainer.css'
import * as Icon from 'react-feather'
// import TimeAgo from 'react-time-ago'

// import CommentSection from './CommentSection'

const PostContainer = props => {
  return(
    <div>  
      {props.postData.map( (post, i) => {
        return (
          <div className="postContainer">
             <div className="opUserInfo">
                <img src={post.thumbnailUrl} alt="Avatar"/>
                <h3>{post.username}</h3>
             </div>
             <img src={post.imageUrl} alt="Original Post" />
             {/* <CommentSection props={this.post} /> */}
             <div className="commentSection">
               <div className="likeAndCommentIcons">
                 <Icon.Heart />
                 <Icon.MessageCircle />
               </div>
               <p>{post.likes} likes</p>
               {post.comments.map( (comment, i) => {
                 return (
                   <div>
                     <h3>{comment.username}</h3>
                     <p>{comment.text}</p>
                   </div>
                 )
                 
               })}
                 {/* <TimeAgo>
                   {post.timestamp}
                 </TimeAgo> */}
                 This is where the Comment Section will be
             </div>
           </div>
        
      )
    })}
  </div>
  )
}

export default PostContainer;