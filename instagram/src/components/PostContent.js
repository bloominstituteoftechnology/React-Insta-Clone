import React from 'react';
import './PostContent.css';

const PostContent = props => {
    return (
        <div className = 'mainContain'>
            <div className = 'postHeader'>
                <img className = 'profilePic' src='#' alt='profileImg'/>
                <h1 className = 'profileName'>props.ProfileName</h1>
            </div>
            <div className = 'mainPicContain'>
            <img className ='mainPic' src='src' alt='profileImg'/>
            </div>
        </div>


    );
};

// PostContainer.propTypes = {
//     posts: PropTypes.arrayOf(PropTypes.object)
//   };

export default PostContent;