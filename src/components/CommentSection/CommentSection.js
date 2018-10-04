import React from 'react';
import PropTypes from "prop-types";
import './CommentSection.css';

const CommentSection = (props) => {
    console.log("commentsection", props);
    // Takes in props:
    // comments: [
    //       username: "philzcoffee",
    //       text:
    // ]
    return (
        <div>
            {props.comments.map( comment => {
                return(
                    <div>
                    <h3>{comment.username}</h3>
                    <p>{comment.text}</p>
                    </div>
                );
            }

            )}
        </div>
    );
};

// Check values are correct
CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        })
    )
};

export default CommentSection;