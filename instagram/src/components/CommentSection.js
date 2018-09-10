import React from 'react'
import PostContainer from './PostContainer'
import PropTypes from 'prop-types'



const CommentSection = props => {

    return(
        <React.Fragment className='Post-display'>

            {/* <div>{props.displayedComments.thumbnailUrl}</div>   */}
            <strong>{props.displayedComments.username}</strong>
            <div>{props.displayedComments.imageUrl}</div>
            <span>{props.displayedComments.likes}</span>
            <span>{props.displayedComments.timestamp}</span>

            <React.Fragment>
                <span>{props.displayedComments.username}</span>
                <span>{props.displayedComments.text}</span>
            </React.Fragment>
            
            
     </React.Fragment>

)};



CommentSection.propTypes = {
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments : {
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }

}





export default CommentSection;