import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post'
import PostPage from './PostPage'

const PostContainer = props => {

    return(
        <React.Fragment>
     {props.posts.map(post => <Post key={post.timestamp} displayedComments={post} />)}
     </React.Fragment>

)};

PostContainer.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.string)
}



export default PostContainer;