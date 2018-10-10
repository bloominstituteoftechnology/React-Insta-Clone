import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainerStyles.css';
import PropTypes from 'prop-types';

const PostContainer = props =>{
    return(
        props.data.map(post => {
            return(
                <div className="post-container" key={post.timestamp}>
                    <div className="user-header">
                        <img alt="user-thumbnail" src={post.thumbnailUrl} className="thumbnail-img" />
                        <p>{post.username}</p>
                    </div>
                    <img alt="user" src={post.imageUrl} />
                    <div className="post-icon">
                        <i className="far fa-heart"></i>
                        <i className="far fa-comment"></i>
                    </div>
                    <p className="num-of-likes">{post.likes} likes</p>
                    <CommentSection comments={post.comments} commentsState={props.commentsState}/>
                    <p className="post-timestamp">{post.timestamp}</p>
                    
                </div>
            );
        }))
}
export default PostContainer;

PostContainer.propTypes ={
    data : PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            thumbnailUrl : PropTypes.string,
            imageUrl: PropTypes.string,
            likes: PropTypes.number,
            timestamp: PropTypes.string,
            comments : PropTypes.arrayOf(
                PropTypes.shape({
                    username:PropTypes.string,
                    text: PropTypes.string,
                })
            )
        })
    ),
}