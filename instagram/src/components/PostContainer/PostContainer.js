import React from 'react'
import './PostContainer.css'
// import * as Icon from 'react-feather'
// import PropTypes from 'prop-types'
// import TimeAgo from 'react-time-ago'

import CommentSection from './CommentSection'

// PostContainer.PropTypes = {

// }

const PostContainer = props => {
  return(
    <div>  
      {props.postData.map( (post, i) => {
        return (
          <div className="postContainer" key={i}>
             <div className="opUserInfo">
                <img src={post.thumbnailUrl} alt="Avatar"/>
                <h3>{post.username}</h3>
             </div>
             <img src={post.imageUrl} alt="Original Post" />
             <CommentSection comments={post.comments} likes={post.likes} />
             
           </div>
        
      )
    })}
  </div>
  )
}

export default PostContainer;