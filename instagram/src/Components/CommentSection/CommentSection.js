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

    submitComment = event =>{
        event.preventDefault()
        let newComment = {text : this.state.comment , username : "Sanusi"}
        let comments = [...this.state.comments]
        comments.push(newComment)
        this.setState({comments, comment : ''})
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