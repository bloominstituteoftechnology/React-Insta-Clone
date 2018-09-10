import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './PostContainer.css';



function Post(props) {
    return (
        <div className="PostContainerDiv">
            <div className="PostUser">
                <img src={props.postProps.thumbnailUrl} alt="" />
                <h2>{props.postProps.username}</h2>
            </div>
            <img id="PostImage" src={props.postProps.imageUrl} alt="" />
            <div className="Buttons">
                <img src="https://static.thenounproject.com/png/682470-200.png" alt="" />
                <img src="https://static.thenounproject.com/png/682476-200.png" alt="" />
            </div>
            <div className="Likes">{props.postProps.likes} likes</div>

            <CommentSection comments={props.postProps.comments} />
        </div>
    )
}

Post.propTypes = {
    comments: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}
export default Post;