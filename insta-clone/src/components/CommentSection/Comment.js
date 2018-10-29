import React from 'react';
import PropTypes from 'prop-types';

import {CommentWrap} from '../Styles/Styles';
import {CommentInput} from '../Styles/Styles';


const Comment = props => {
    return <CommentWrap>
        <CommentInput type='user'>{props.comment.username}</CommentInput> 
        <CommentInput type='comment'>{props.comment.text}</CommentInput>
      </CommentWrap>;
}

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string,
}

export default Comment;