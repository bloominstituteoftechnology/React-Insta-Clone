import React from 'react';
import Comment from '../Comment/Comment';
import '../CommentSection/CommentSection.css'

class CommentSection extends React.Component {
    render() {
        return (
            <div>
                {this.props.comments.map(comment => {
                    return (
                        <Comment key={comment.text} comment={comment} />
                    )
                })}
                <div>{this.props.post.timestamp}</div>
                <form>
                    <input className={'commentInput'} placeholder={'Add a comment...'} />
                </form>
            </div>
        )
    }
}

export default CommentSection;