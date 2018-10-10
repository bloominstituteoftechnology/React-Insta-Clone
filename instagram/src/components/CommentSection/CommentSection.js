import React from "react";
import PropTypes from "prop-types";

import "./CommentSection.css";

class CommentSection  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            newCommentText: ""
        };
    }

    newCommentChangeHandler = ev => {
        this.setState({ newCommentText: ev.target.value });
    }

    submitNewComment = ev => {
        ev.preventDefault();
        const hardCodedUsername = "CptJackSparrow";
        this.setState({
            arr: [...this.state.arr, { username: hardCodedUsername, text: this.state.newCommentText }],
            newCommentText: "" 
        });
    }

    render() {
        return(
            <div className="comments">
                {this.state.arr.map(comment => 
                    <p><strong>{comment.username}</strong> {comment.text}</p>
                )}
                <form onSubmit={this.submitNewComment}>
                    <input 
                        type="text" 
                        placeholder="Add a comment..." 
                        id={this.state.id} 
                        value={this.state.newCommentText}
                        onChange={this.newCommentChangeHandler}
                    />
                </form>
            </div>
        );
    }
};

CommentSection.propTypes = {
    arr: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })).isRequired
}

export default CommentSection;