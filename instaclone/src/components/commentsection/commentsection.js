import React from "react";
import PropTypes from "prop-types";
import Comment from "./comment";
import CommentInput from "./commentinput";

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        };
    }

    componentDidMount() {
        let id = this.props.postID;
        if (localStorage.getItem(id)) {
            this.setState({
                comments: JSON.parse(localStorage.getItem(this.props.postID))
            });
        }
             else {
                this.setComments();
            }
    }   

    setComments = () => {
        localStorage.setItem(
            this.props.postID,
            JSON.stringify(this.state.comments)
        );
    };


    commentHandler = event =>{
        this.setState({ comment: event.target.value })
    }

    handleCommentSubmit = event => {
        event.preventDefault();
        let newComment = { text: this.state.comment, username: 'Parzival'};
        let comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({ comments, comment: ''});
        setTimeout(() => {
            this.setComments();
        }, 500);
    };


    render() {
        return (
            <div>
                {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
                <CommentInput 
                comment={this.state.comment}
                submitComment={this.handleCommentSubmit}
                changeComment={this.commentHandler}
                />
            </div>
        );
    };
 };

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    )
}

export default CommentSection