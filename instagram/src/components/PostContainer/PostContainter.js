import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

const PostContainer = (props) => {
        console.log("Props: ", props);
        return(
                <div>
                
               <h3>{props.post.username}</h3>
                {props.post.comments.map((comment, index) => (
                        <CommentSection comment={comment} key={index} />
                ))}
                </div>
        );

        PostContainer.propTypes = {
                comment: PropTypes.objectOf(PropTypes.string).isRequired
            };
}

export default PostContainer;