import React from 'react';
import PropTypes from 'prop-types';

import {CommentWrapper, CommentText, CommentHeading} from '../PostContainer/PostsStyled';

const Comment = props => {


    return (
    <CommentWrapper>
        <CommentText><CommentHeading>{props.commentData.username}</CommentHeading>{props.commentData.text}</CommentText>
    </CommentWrapper>
    );
  };

  Comment.propTypes = {
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };
  
  export default Comment;