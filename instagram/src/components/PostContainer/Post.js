import React from 'react'
import PostContainer from './PostContainer'
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types'



const Post = props => {

    return(
        <React.Fragment>
            <div className='user'>
                <img src={props.displayedComments.thumbnailUrl} alt=''/>
                <strong>{props.displayedComments.username}</strong>
            </div>

            <img id='post-image' src={props.displayedComments.imageUrl} alt=''/>
            
            <div className="Buttons">
                <img src="https://static.thenounproject.com/png/682470-200.png" alt="" />
                <img src="https://static.thenounproject.com/png/682476-200.png" alt="" />
            </div>
            
            <div className='likes'>{props.displayedComments.likes} likes</div>
 
            <CommentSection comments={props.displayedComments.comments} />
            
            
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