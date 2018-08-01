import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from "prop-types";

const Post = props => {
    return (
        <div className='post-container'>
            {props.posts.map((item,i) => {
                return(
                    <div key={i}>
                        <div className='user'><img className ='thumbnail' src={item.thumbnailUrl} alt ='user thumbnail img'/> {item.username}</div>
                        <img className = 'post-img' src={item.imageUrl} alt='Post Img'/>
                        <div className="bottom-section">
                            <div>
                                <CommentSection comments={item.comments}
                                                timestamp={item.timestamp}
                                                likes={item.likes}/>
                            </div>
                        </div>
                    </div>
            )})}
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