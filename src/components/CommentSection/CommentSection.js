import React from 'react';
import Comment from './Comment'


class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passedUser: props.postUser,
            passedText: props.postComments
        };
    }
    render() {
        return (
            <div>
                <Comment
                    passedUser={this.state.passedUser}
                    passedText={this.state.passedText}
                />
            </div>
        )
    }
}

export default CommentSection;