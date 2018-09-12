import React from 'react'
import PostContainer from './PostContainer'
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types'



const Post = props => {

    return(
        <React.Fragment className='post-container'>
            <div className='user'>
                <img src={props.displayedComments.thumbnailUrl} />
                <strong>{props.displayedComments.username}</strong>
            </div>

            <img id='post-image' src={props.displayedComments.imageUrl} />
            
            
            <div className='likes'>{props.displayedComments.likes} likes</div>
            <div>{props.displayedComments.timestamp}</div>
            

            <React.Fragment>
                <span>{props.displayedComments.username}</span>
                <span>{props.displayedComments.text}</span>
            </React.Fragment>
            
            
     </React.Fragment>

)};



Post.propTypes = {
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





export default Post;