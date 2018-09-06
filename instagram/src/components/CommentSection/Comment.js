import React from 'react';
import PropTypes from 'prop-types';
import {UserName} from '../PostContainer/PostHeader';
//import './Comment.css';
import styled, {css} from "styled-components";



export const FlexWrapper = styled.div`
  display: flex;
  ${props =>
        props &&
        css`
      line-height: 8px;
    `};
`;
const CommentParagraph = styled.p`
  font-weight: 400;
  font-size: 0.8em;
  padding: 0 5px;
`;
const Comment = props => {
    return (
        <FlexWrapper>
            <UserName>{props.comment.username}</UserName>
            <CommentParagraph>{props.comment.text}</CommentParagraph>
        </FlexWrapper>
    );
};
       /* <div className="comment-text" onClick={props.delComment}>
            <span className="comment">{props.comment.text}</span>
            {""}
                <span className="user">{props.comment.username}</span>
            </div>*/
            

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string,
        
        
    })
};

export default Comment;
