import React from 'react'
import Posts from './PostContainer/Posts'
import PropTypes from 'prop-types'



const Comments = props => {

    return(
        <React.Fragment className='Comments-display'>

            <img src={props.displayedComments.thumbnailUrl} />
            <strong>{props.displayedComments.username}</strong>
            <img src={props.displayedComments.imageUrl} />
            <span>{props.displayedComments.likes}</span>
            <span>{props.displayedComments.timestamp}</span>

            <React.Fragment>
                <span>{props.displayedComments.username}</span>
                <span>{props.displayedComments.text}</span>
            </React.Fragment>
            
            
     </React.Fragment>

)};



Comments.propTypes = {
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
            PropTypes.shape(
                {
                    username: PropTypes.string.isRequired,
                    text: PropTypes.string.isRequired
            })
    )

}





export default Comments;