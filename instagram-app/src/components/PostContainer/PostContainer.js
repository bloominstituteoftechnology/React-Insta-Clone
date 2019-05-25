import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post'
import CommentSection from '../CommentSection/CommentSection'
// import App from './src/App'
 

const PostContainer = props =>{
   console.log(props)
     return(
       <div>
        <Post
          name= {props.object.username}
           imgThumbnail = {props.object.thumbnailUrl}
            img = {props.object.imageUrl}
            likes = {props.object.likes}
             time = {props.object.timestamp}
             />

             <CommentSection

               comment= {props.object.comments}/>
        </div>
      )
     
}

PostContainer.propTypes = {
    list: PropTypes.array,
    
    
}


export default PostContainer