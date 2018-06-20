import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.likes,
            comments: props.comments,
            comment: '',
        };
    }

    commentHandler = event => {
        this.setState({comment: event.target.value});
    }

    submitComment = event => {
        event.preventDefault();
        const newComment = {text: this.state.comment, username: 'mark'};
        const comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({comments, comment: ''});
    };

    render() {
        console.log(this.state.comments);
        return(
            <div>
                <i className="far fa-heart"></i>
                <i className="far fa-comment"></i>
                <p className="likes">{`${this.state.likes} likes`}</p>
                {this.state.comments.map((comment, i) => <Comment key={i} comment={comment} />)}
                <CommentInput comment={this.state.comment} submitComment={this.submitComment} commentHandler={this.commentHandler}/>
            </div>
        )
    };
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({text: PropTypes.string, username: PropTypes.string})
    )
};

export default CommentSection;