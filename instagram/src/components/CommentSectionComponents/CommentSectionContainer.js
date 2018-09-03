import React from 'react';
import CommentComment from './Comment';
import CommentBar from './CommentBar';

class CommentSectionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            comment: props.comment
        };
    }

    render() {
        return (
            <div>
                {this.state.comment.map((comment)=> <CommentComment comment={comment}/>)}
                <CommentBar />
            </div>
        );
    }
}

export default CommentSectionContainer;