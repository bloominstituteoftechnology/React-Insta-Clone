import React from 'react'
import './CommentSection.css';

class CommentForm extends React.Component {

    render() {
        return (
            <form className="comment-form">
                <input className="input-text" placeholder="Add a comment..." />
                <button type="submit" className="submit-button"><i class="fas fa-ellipsis-h"></i></button>
            </form>
        )
    }
}

export default CommentForm;