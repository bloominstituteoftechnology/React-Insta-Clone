import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post'
import CommentSection from '../CommentSection/CommentSection'
// import App from './src/App'
 

const PostContainer = props =>{
   console.log(props)
     return(
       <div>
         {props.posts.map (p => <Post key = {p.imgUrl} post ={p} />)}
         </div>
          
      )
     
}

PostContainer.propTypes = {
    list: PropTypes.array,
    
    
}


export default PostContainer