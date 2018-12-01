import React from "react";
import PropTypes from "prop-types";
import Comment from './Comment';
import Input from "./Input";


class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
        };
    }

    componentDidMount() {
        const id = this.props.idPost;
        if (localStorage.getItem(id)) {
            this.setState({
                comments: JSON.parse(localStorage.getItem(this.props.idPost))
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
            this.props.idPost,
            JSON.stringify(this.state.comments)
        );
    }

    handleComment = event => {
        this.setState({comment: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
        const addComment = {text: this.state.comment, username: ''};
        const comments = this.state.comments.slice();
        comments.push(addComment);
        this.setState({comments, comment:''});

    }

    render() {
        return (
            <div className='comment-section'>           
                {this.state.comments.map((c, i) => <Comment comment={c} key={i}  />)}
            <Input
                comment={this.state.comment}
                handleSubmit={this.handleSubmit}
                handleComment={this.handleComment} 
            />
            </div>
        );
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({text: PropTypes.string, username: PropTypes.string})
    )
};

export default CommentSection;