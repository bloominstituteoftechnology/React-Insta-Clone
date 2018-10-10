import React from 'react'
import PropTypes from "prop-types";
import './CommentSection.css';

class CommentForm extends React.Component {

    state = { text: "" };

    handleChange = event => {
        this.setState({
            text: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addNewComment({ key: this.props.postKey, text: this.state.text, });
        this.setState({ comment: "" });
    };

    render() {
        return (
            <form className="comment-form" onSubmit={this.handleSubmit} >
                <input 
                    className="input-text" 
                    placeholder="Add a comment..." 
                    value={this.state.comment} 
                    onChange={this.handleChange}
                />
                <button 
                    className="submit-button"
                    type="submit">
                        <i className="fas fa-ellipsis-h"></i>
                </button>
            </form>
        )
    }
}

CommentForm.propTypes = {
    postKey: PropTypes.number.isRequired,
    addNewComment: PropTypes.func,
}

CommentForm.defaultProps = {
    postKey: 0,
}

export default CommentForm;