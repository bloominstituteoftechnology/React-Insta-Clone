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
            timestamp: this.props.timestamp,
        }))
    }

    render() {
        return (
            <div className="comments-main-container">
                <div className="comments-container">
                    {this.state.content.map(comment => {
                        return <Comment username={comment.username} text={comment.text}/>
                    })}
                    <div className="timestamp">{this.state.timestamp}</div>
                </div>
                {/* Time stamp*/}
                
                {/* Divider (border-bottom)*/}
                {/* Add Comment section*/}

                    <form className="comment-input">
                        <input type="text" placeholder="Add a comment..."/>
                        <i className="fas fa-ellipsis-h"></i>
                    </form>

            </div>
        )
    }
}

export default CommentSection;