import React from 'react';
import PropTypes from 'prop-types';
import { Comments, CommentFromUser, UserName} from '../../Styles';

const Comment = props =>{
    console.log("comment props", props);
    return(
        <Comments>
            <UserName>{props.comment.username}</UserName>
            <CommentFromUser>{props.comment.text}</CommentFromUser> 
        </Comments>
    );
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
};

export default Comment;