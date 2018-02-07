import React, { Component } from 'react';
import './CommentSection.css';
import dummyData from '../../dummy-data'

class CommentSection extends Component {
    state = {dummyData}
    render() {
        return (
                <ul>
                    {this.state.comments.map(comment => {
                        return (
                            <li>{comment}</li>
                        )
                    })}
                </ul>
            )
    }    
}

export default CommentSection