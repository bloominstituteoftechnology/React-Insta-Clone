import React from 'react';
import PropTypes from 'prop-types';

import CommentSection from '/Users/BradMortensen/Documents/Git/React/React-Insta-Clone/instagram/src/components/CommentSection/commentsection'

const PostContainer = props => {
    return (
        <div className = 'post-container'>
            <h1 className= 'username'>{props.content.username}</h1>
            <img className= 'avatar'  src= {props.content.thumbnailUrl} alt={props.content.username}/>
            <img className= 'post-image' src= {props.content.imageUrl} alt={props.content.username}/>
        </div>
    );
} 

PostContainer.propTypes = {
    content: PropTypes.arrayOf(PropTypes.object)
}
PostContainer.propTypes = {
    username: PropTypes.string,

}
export default PostContainer;