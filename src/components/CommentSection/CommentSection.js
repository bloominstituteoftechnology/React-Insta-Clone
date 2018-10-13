import React from 'react';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import moment from 'moment';
import styled from 'styled-components';

// Styled Components:
const CommentSectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    padding: 10px;
`;
const CommentWrapper = styled.div`
    padding-bottom: 10px;
`;
const DateWrapper = styled.div`
    font-size: 11px;
    color: gray;
`;
const NewComment = styled.div`
    height: 40px;
    margin-top: 10px;
    border-top: 1px solid gray;
    width: 780px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
const InputWrapper = styled.input`
    width: 730px;
    height: 25px;
    border: 0px solid gray;
    margin-top: 10px;
`;


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
        <CommentSectWrapper>
            {props.comments.map( comment => {
                return(
                    <CommentWrapper key={i++}>
                        <b>{comment.username}</b> {comment.text}
                    </CommentWrapper>
                );
            }

            )}
            <DateWrapper>{postedAt}</DateWrapper>
            <NewComment>
                <InputWrapper onKeyUp={props.handleComment} placeholder='Add a comment...' />
                <FontAwesomeIcon icon="ellipsis-h" />
            </NewComment>
        </CommentSectWrapper>
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