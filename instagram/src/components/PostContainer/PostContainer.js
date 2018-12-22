import React from 'react';
import Post from './Post'
import PropTypes from 'prop-types';
const PostContainer = props => {
 return(
  <div>
   {props.data.map((post, index) => <Post key={index} 
    post={post}
   />)}
  </div>
 )
}

PostContainer.PropTypes = {
 data: PropTypes.array.isRequired
}
export default PostContainer