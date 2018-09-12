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
            {/* icons used to be here */}

            <CommentSection likes={props.postProps.likes} comments={props.postProps.comments} />
        </div>
    )
}

Post.propTypes = {
    postProps: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        comments: PropTypes.arrayOf(PropTypes.object),
    })
}

export default Post;