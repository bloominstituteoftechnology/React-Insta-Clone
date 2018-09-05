import React from 'react';
import Comment from './Comment';
import './CommentSection.css';

CommentSection.propTypes = {
    postData: PropTypes.shape({
        comments: PropTypes.array,
        timestamp: PropTypes.string
    })
};

class CommentSection extends React.Component {

    state = {
        comments: this.props.post.comments,
        username: ""
    };

    componentDidMount() {
        const id = this.props.post.imageUrl;
        this.addNewComment();
    }

    addNewComment = event => {
        event.preventDefault();
        if (this.state.inputText) {
            this.setState({
                users: this.state.users,
                inputText: this.state.inputText
            });
        }
    };

    handleInput = event => {
        this.setState({
            inputText: event.target.value
        });
    };

    render() {
        return (
        <div className="commentSection">
        {props.comments.map((comment) => (
            <Comment comment={comment} key={comment.text} />
        ))}
        <input value={props.inputText} onChange={props.handleInput} />
        </div>
        );
    }

}
 export default CommentSection;