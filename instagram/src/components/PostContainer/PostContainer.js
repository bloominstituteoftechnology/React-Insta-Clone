import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';


const PostContainer = props => {
    return(
        <div className="post-container">
            <h1>{props.usrData.username}</h1>
            <CommentSection usrData={props.usrData} />
        </div>
    );
}

export default PostContainer;


PostContainer.propTypes = {
    usrData: PropTypes.object,
    username: PropTypes.number,
    comments: PropTypes.array
}