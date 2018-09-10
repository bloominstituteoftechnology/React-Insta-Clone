import React from 'react'
import CommentSection from './CommentSection'
import PropTypes from 'prop-types'



const PostContainer = props => {

    return(
        <React.Fragment className=''>
     {props.comments.map(comment => <CommentSection key={comment.timestamp} displayedComments={comment} />)}
     </React.Fragment>

)};

PostContainer.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.string)
}



export default PostContainer;