import React from 'react';
import './CommentSection.css';

class CommentSection extends React.Component {

    render() {

        return (
            <div className="comment">
                <span className="commentUser">{this.props.username}</span>
                <span className="commentText">{this.props.text}</span>
            </div>
        )

    }
};

export default CommentSection;
