import React from 'react';
import Comment from "./Comment";
import './CommentSection.css';

class CommentSection extends React.Component {
    constructor() {
        super();
        this.state = {
            content: [],
            timestamp: '',
        }
    }
    componentDidMount() {
        this.setState(state => ({
            content: this.props.content,
        }))
    }

    render() {
        return (
            <div className="comments-main-container">
                <div className="comments-container">
                    {/* Map over comments in dummy data */}
                    {this.state.content.map(comment => <Comment username={comment.username} text={comment.text}/>)}
                </div>
                {/* Time stamp*/}
                <div className="timestamp">{this.state.timestamp}</div>
                {/* Divider (border-bottom)*/}
                {/* Add Comment section*/}
                <div className="comment-input">
                    <form>
                        <input type="text" placeholder="Add a comment..."/>
                    </form>
                    <i className="fas fa-ellipsis-h"></i>
                </div>
            </div>
        )
    }
}

export default CommentSection;