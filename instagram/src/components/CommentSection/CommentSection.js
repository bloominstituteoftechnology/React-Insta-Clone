import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment.js';
import CommentInput from './CommentInput.js';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            commentInputText: ''
        };
    }

    componentDidMount() {
        const id = this.props.postId;
        if (localStorage.getItem(id)) {
            this.setState({
            comments: JSON.parse(localStorage.getItem(this.props.postId)),
            });
        } else {
            this.setComments();
        }
    }
    
    componentWillUnmount() {
        this.setComments();
    }

    setComments = () => {
        localStorage.setItem(
            this.props.postId,
            JSON.stringify(this.state.comments)
        );
    } 

    addNewComment = event => {
        event.preventDefault();
        if (this.state.commentInputText) {
            // this.setState ({
            //     comments: [...this.state.comments, 
            //                 {text: this.state.commentInputText, 
            //                 username: 'comment_troll'}],
            //     commentInputText: ''
            // });
            // this.setComments;
            const newComment = { text: this.state.commentInputText, username: 'comment_troll' };
            const comments = [...this.state.comments];
            comments.push(newComment);
            this.setState({ comments, commentInputText: '' });
        }
    }
    
    handleCommentInput = event => {
        this.setState({ commentInputText: event.target.value});
    }

    render() {
        return (
            <div>
                {this.state.comments.map((comment, i) => <Comment key={i} comment={comment} />)}
                <CommentInput commentInputText={this.state.commentInputText}
                addNewComment={this.addNewComment}
                handleCommentInput={this.handleCommentInput}/>
            </div>
        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    )
};



export default CommentSection;


