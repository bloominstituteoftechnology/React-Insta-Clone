import React, { Component } from 'react';
import './CommentSection.css';

class CommentSection extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                {this.props.data}
            </div>
        )
    }
}

export default CommentSection;