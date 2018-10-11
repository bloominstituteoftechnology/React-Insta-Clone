import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
    constructor(props){
        super(props);
        console.log("comment section props", this.props);
        this.state = {
            comments: props.comments,
            comment: ''
        }
    }

    componentDidMount() {
        console.log("comment section props", this.props);
        const id = this.props.postId;
        if (localStorage.getItem(id)) {
            this.setState({
                comments: JSON.parse(localStorage.getItem(this.props.postId))
            });
        } else {
            this.addComments();
        }
    }

    componenetWillUnmount() {
        this.addComments();
    }


    addComments = () => {
        localStorage.setItem(
            this.props.postId,
            JSON.stringify(this.state.comments)
        );
    };
    commentHandler = event => {
        this.setState({ comment: event.target.value });
    };

<<<<<<< HEAD
    submitCommentHandle = e => {
        e.preventDefault();
        const newComment = { text: this.state.comment, username: 'Pedro Montesinos' };
=======
    // submitCommentHandle = event => {
    //     event.preventDefault();
    //     const newComment = {text: this.state.comment, username: 'Pedro Montesinos'};
    //     const comments = this.state.comments.slice();
    //     comments.push(newComment);
    //     this.setState({ comments, comment: '' });
    //     setTimeout(() => {
    //         this.addComments();
    //     }, 300);
    // };
    submitCommentHandle = e => {
        e.preventDefault();
        const newComment = { text: this.state.comment, username: 'ryanhamblin' };
>>>>>>> f0034b3e0cbf6540a366b8fd97885d8bf551c9da
        const comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({ comments, comment: '' });
        setTimeout(() => {
            this.addComments();
        }, 500);
    };

    render() {
        return (
            <div>
<<<<<<< HEAD
                {this.state.comments.map((comment, index) => <Comment key={index} comment={comment} />)}
=======
                {this.props.comments.map((comment, index) => <Comment key={index} comment={comment} />)}
>>>>>>> f0034b3e0cbf6540a366b8fd97885d8bf551c9da
                <CommentInput
                    comment={this.state.comment}
                    submitComment={this.submitCommentHandle}
                    changeComment={this.commentHandler}
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