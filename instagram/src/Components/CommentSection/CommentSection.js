import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment'
import CommentInput from './CommentInput';


class CommentSection extends Component {
    constructor(props){
        super(props)
        this.state = {
            comments : props.comments,
            comment : ''
        }
    }

    changeComment = event => {
        this.setState({comment : event.target.value })
    }
    render() {
        return (
            <div>
              {this.state.comments.map((comment , index) => <Comment  key={index} comment ={comment}/>)}
              <CommentInput
                comment = {this.state.comment}
                changeComment = {this.changeComment}
                handleCommentSubmit ={this.submitComment}
              />

            </div>
        );
    }
}

CommentSection.propTypes = {

};

export default CommentSection;