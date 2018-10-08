import React from 'react';
import './CommentSection.css';

class CommentSection extends React.Component {
    constructor() {
        super();
        this.state = {
            content: [],
        }
    }
    componentDidMount() {
        this.setState(state => ({
            content: this.props.content,
        }))
    }

    render() {
        return (
            <div className="comments-container">
                {/* Map over comments in dummy data */}
                {/* Time stamp*/}
                {/* Divider */}
                {/* Add Comment section*/}
            </div>
        )
    }
}

export default CommentSection;