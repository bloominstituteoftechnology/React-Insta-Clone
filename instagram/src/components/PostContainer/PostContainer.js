import React from 'react';
import '../ig.css';
import CommentSection from '../Comments/CommentSection.js';
import PropTypes from 'prop-types';

const PostContainer = props => {
    console.log(props.postObjectArray.comments);
    return (
        // postCard
        <div className="postCard">
            <div className="card-header">
                <img src={props.postObjectArray.thumbnailUrl} alt="thumbImage" className="card-thumbnail"/>
                {props.postObjectArray.username}
            </div>

            <div className="card-body">
                <img src={props.postObjectArray.imageUrl} alt="bodyImage" className="card-image"/>
                <CommentSection comments = {props.postObjectArray.comments}/>
            </div>
        </div>
    )
}

PostContainer.propTypes = {
    dummyData: PropTypes.array.isRequired
};

export default PostContainer;