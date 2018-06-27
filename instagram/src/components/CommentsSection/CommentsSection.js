import React from 'react';
import Comment from './Comment';
import './comments-section.css';

class CommentsSection extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            comments:props.comments
        };
}//Constructor

render() {
    return (
        <div className="comments">
            {this.state.comments.map(comment =>
            <Comment key={comment.username} comment={comment}
            />)}
        </div>
        );
    }
}//CommentsSection

export default CommentsSection;