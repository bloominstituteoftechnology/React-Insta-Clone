import React from 'react';
import './CommentSection.css';

class CommentSection extends React.Component {

    render() {
        return (
            <div>
                {this.props.username}
                {this.props.text}
            </div>
        )

    }
};

export default CommentSection;