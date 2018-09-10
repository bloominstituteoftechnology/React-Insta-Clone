import React from 'react'
import PostContainer from './PostContainer'
import PropTypes from 'prop-types'



const CommentSection = props => {

    return(
        <div className=''>
     {props.commentDisplay.username}
     </div>

)};

// PostContainer.propTypes = {
//     comments: PropTypes.arrayOf(PropTypes.string)
// }



export default CommentSection;