import React from 'react';
import Comment from './Comment';
import './comments-section.css';
import CommentInput from './CommentInput';


class CommentsSection extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            comments:props.comments,
            comment:""
        };
}//Constructor

componentDidMount() {
    const id= this.props.postId;
    if (localStorage.getItem(id)) {
        this.setState({
            comments: JSON.parse(localStorage.getItem(this.props.postId))
        });
    } 
    else {
        this.setComments();
    }
}

componentWillUnmount() {
    this.setComments();
}

setComments= () => {
    localStorage.setItem(
        this.props.postId,
        JSON.stringify(this.state.commments)
    );
};

commentChangeHandler= event => {
    {this.setState({ comment: event.target.value})};
}

addComment= event => {
    event.preventdefault();
    const newComment = {text: this.state.comment, username:'Alex'};
    const comments= this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, comment: ''});
    // setTimeout(() => {
    //     this.setComments();
    // }, 500);
};

render() {
    return (
        <div className="comments">
            {this.state.comments.map(comment =>
            <Comment key={comment.username} comment={comment}
            />)}
            <CommentInput 
            addComment={this.addComment}
            commentChangeHandler={this.commentChangeHandler}
            comment={this.state.comment}
            />
        </div>
        );
    }
}//CommentsSection

export default CommentsSection;