import React from 'react'
import PostContainer from './PostContainer'
import PropTypes from 'prop-types'



const CommentSection = props => {

    return(
        <React.Fragment className='Post-display'>

            <div className='thumbnail'>{props.displayedComments.thumbnailUrl}</div>  
            <strong>{props.displayedComments.username}</strong>
            <div>{props.displayedComments.imageUrl}</div>

            <React.Fragment>
                <span>{props.displayedComments.username}</span>
                <span>{props.displayedComments.text}</span>
            </React.Fragment>
            
            
     </React.Fragment>

)};

// PostContainer.propTypes = {
//     comments: PropTypes.arrayOf(PropTypes.string)
// }



export default CommentSection;