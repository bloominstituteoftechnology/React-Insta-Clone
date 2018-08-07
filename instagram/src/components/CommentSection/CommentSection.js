import React, { Component } from 'react';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
        };
    }

    commentHandler = event => {
        this.setState({ comment: event.target.value });
      };

    submitNewComment = event => {
        event.preventDefault();

        const newComment = { text: this.state.comment, username: "dennis_futbol" };
        const comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({ comment: "", comments });
    };

    render() {
        return (
          <div>
            {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
            <CommentInput
              submitHandler={this.commentSubmit}
              changeHandler={this.commentHandler}
              comment={this.state.comment}
            />
          </div>
        );
      
    }
}
    
CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    )
};


export default CommentSection;