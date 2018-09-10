import React from 'react'
import CommentSection from './CommentSection'
import PropTypes from 'prop-types'



const PostContainer = props => {

    return(
        <div className=''>
     {props.comments.map(comment => <CommentSection key={comment.timestamp} displayedComments={comment} />)}
     </div>

)};

// PostContainer.propTypes = {
//     comments: PropTypes.arrayOf(PropTypes.string)
// }



export default PostContainer;