import React from 'react';
import Comment from '../Comment/Comment';

class CommentSection extends React.Component {
    render() {
        return (
            <div>
                {this.props.comments.map(comment => {
                    return (
                        <Comment key={comment.text} comment={comment} />
                    )
                })}
            </div>
        )
    }
}

export default CommentSection;