import React from 'react'
import CommentSection from './CommentSection'
import PropTypes from 'prop-types'



const PostContainer = props => {

    return (props.comments.map(comment => <CommentSection key={comment.timestamp} displayedComments={comment} />));
}


PostContainer.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
}



export default PostContainer;