import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from "prop-types";

const PostContainer = props => {
    return (
        <div className='post-container'>
            {props.posts.map((item,i) => {
                return(
                    <div key={i}>
                    <div>{item.username}</div>
                    <img className ='thumbnail' src={item.thumbnailUrl} alt ='user thumbnail img'/>
                    <img className = 'post-img' src={item.imageUrl} alt='Post Img'/>
                    <div>{item.likes} likes</div>
                    <div><CommentSection comments={item.comments}/></div>
                    <div>{item.timestamp}</div>
                </div>
                )}
            )}
        </div>
    )
}

PostContainer.proptypes = {
    posts: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.array
    })
}

export default PostContainer;