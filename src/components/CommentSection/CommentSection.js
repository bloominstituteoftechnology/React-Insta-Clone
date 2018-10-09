import React from 'react';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './CommentSection.css';
import moment from 'moment';

const CommentSection = (props) => {
    // console.log("commentsection", props);
    // Takes in props:
    // comments: [
    //       username: "philzcoffee",
    //       text:
    // ]
    // timestamp:
    // handleComment: fn

    // Format the timestamp using moment:
    const postedAt = moment(props.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow();

    let i = 0;

    return (
        <div className='commentSection'>
            {props.comments.map( comment => {
                return(
                    <div className='comment' key={i++}>
                        <b>{comment.username}</b> {comment.text}
                    </div>
                );
            }

            )}
            <div className='postedAt'>{postedAt}</div>
            <div className='newComment'>
                <input className='commentInput' onKeyUp={props.handleComment} placeholder='Add a comment...' />
                <FontAwesomeIcon icon="ellipsis-h" />
            </div>
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