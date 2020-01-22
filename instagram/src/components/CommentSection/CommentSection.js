import React, { Component } from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';


const Comment = styled.div`
    display: flex;
    width: 100%;
    padding: 2% 2% 0 0;
`;

const UsersComment = styled.div`
    font-weight: 700;
    margin-right: 2%;
`;



const CommentSection = (props) => {
   return (
            <Comment>
                <UsersComment>
                    {props.comment.username}
                </UsersComment>
                <div>
                    {props.comment.text}
                </div>
            </Comment>
        );
    }



CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
      PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    )
  };


export default CommentSection;