import React from "react";
import PropTypes from "prop-types";
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css'

const PostContainer = props => {
    // console.log(props.data.comments)
    return (
        <div className='post-style'> 
            <div className='post-header'>
                <img src={props.data.thumbnailUrl}/>
                <p>{props.data.username}</p>
            </div>
            <CommentSection comments={props.data.comments} data={props.data}/>
        </div>
    )
}


PostContainer.propTypes = {
    data: PropTypes.shape({
        username: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,     
    }) 
    
}

export default PostContainer;