import React from "react";

class CommentSection extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {
      comments
    } = this.props;

        return (
            <div>
                {comments.map(comment => (
                    <div>
                        <strong>{comment.username}</strong>&nbsp;
            <span>{comment.text}</span>
                    </div>
                ))}
            </div>
        );
    }
}


export default CommentSection;