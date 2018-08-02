import React from 'react';
import './CommentSection.css'; 
import PropTypes from 'prop-types'; 
import {CommentsStyled, CommentStyled, UserCommentName, UserCommentText} from './CommentSectionStyled.js';


class Comments extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }


    render () {

        return (

            <CommentsStyled>  
              <CommentStyled>
                <UserCommentName onDoubleClick={this.props.onDoubleClick}>{this.props.userName}</UserCommentName>
                <UserCommentText>{this.props.text}</UserCommentText>
              </CommentStyled>
              
            </CommentsStyled>
        ); 
    }
}


Comments.propTypes = {
    userName: PropTypes.string,
    text: PropTypes.string,
    time: PropTypes.string,
    onDoubleClick: PropTypes.func
}

export default Comments 