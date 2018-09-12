import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post'


const PostContainer = props => {

    return(
        <React.Fragment className=''>
     {props.comments.map(comment => <Post key={comment.timestamp} displayedComments={comment} />)}
     </React.Fragment>

)};

PostContainer.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.string)
}



export default PostContainer;