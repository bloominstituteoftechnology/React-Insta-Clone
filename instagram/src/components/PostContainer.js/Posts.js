import React from 'react'
import Comments from './CommentSection/Comments'
import PropTypes from 'prop-types'



const Posts = props => {

    return(
        <React.Fragment className=''>
     {props.comments.map(comment => <Comments key={comment.timestamp} displayedComments={comment} />)}
     </React.Fragment>

)};

Posts.propTypes = {
    comments: PropTypes.arrayOfType(PropTypes.string)
}



export default Posts;