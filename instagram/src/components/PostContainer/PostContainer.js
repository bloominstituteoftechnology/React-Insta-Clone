import React from 'react';
import './PostContainer.css';
import Comment from '../CommentSection/CommentSection';
import PropTypes from "prop-types";

const Post = props => {
    return (
        <div className='post-container'>
            {props.posts.map((item,i) => {
                return(
                    <div key={i}>
                        <div className='user'><img className ='thumbnail' src={item.thumbnailUrl} alt ='user thumbnail img'/> {item.username}</div>
                        <img className = 'post-img' src={item.imageUrl} alt='Post Img'/>
                        <div>
                            <i className="fa fa-heart-o like-comment" aria-hidden="true"></i>
                            <i className="fa fa-comment-o like-comment" aria-hidden="true"></i>
                        </div>
                        <div className="bottom-section">
                            <div className='likes'>{item.likes} likes</div>
                            <div><Comment comments={item.comments}/></div>
                            <div>{item.timestamp}</div>
                        </div>
                        <div className='footer'><input className='add-comment' placeholder="Add a comment..."></input><i className="fa fa-ellipsis-h"></i></div>
                    </div>
                )}
            )}
        </div>
    )
}

Post.proptypes = {
    posts: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.object)
    })
}

export default Post;