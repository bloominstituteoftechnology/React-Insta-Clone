import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: '',
        };
    }

    componentDidMount() {
        if(localStorage.getItem(this.props.postId)) {
            this.setState({comments: JSON.parse(localStorage.getItem(this.props.postId))});
        }
        else {
            this.setComment();
        }
    }

    componentWillUnmount() {
        this.setComment();
    }

    setComment = () => {
        localStorage.setItem(this.props.postId, JSON.stringify(this.state.comments)); 
    }

    commentHandler = event => {
        this.setState({comment: event.target.value});
    }

    submitComment = event => {
        event.preventDefault();
        const newComment = {text: this.state.comment, username: localStorage.getItem('user')};
        const comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({comments, comment: ''});
        setTimeout(() => {
            this.setComment();
        }, 500);
    };

    render() {
        return(
            <div>
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