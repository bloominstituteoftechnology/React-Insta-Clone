import React, { Component } from 'react';

class NewComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentList: [],
            newComment: '',
        }
    }

    AddComment = (e) => {
        console.log('clicked button');
    }

    render () {
        return (
            <div>
                <p>Add new comment here</p>
                <input placeholder="new comment"/>
                <button onClick={this.AddComment}>Add Comment</button>
            </div>
        )
    }
}

export default NewComment;