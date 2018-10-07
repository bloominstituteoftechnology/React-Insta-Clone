import React from 'react';
import './CommentSection.css';
import Comment from './Comment';

class CommentSection extends React.Component {
    state = {
        comments: [],
        newCommentText: "",
        likes: 0
    };
    componentDidMount() {
        this.setState({ comments: this.props.comments, likes: this.props.likes });
    }
    onChange = e => {
        this.setState({ newCommentText: e.target.value });
    };
    addComment = () => {
        const username = "Jonathan";
        const text = this.state.newCommentText;
        this.setState({
        comments: [...this.state.comments, { username, text }],
        newCommentText: ""
        });
    };
    likePost = () => {
        this.setState({ likes: this.state.likes + 1 });
    };
    render() {
        return (
        <div className="comments-section">
        <div className="commentIcons">
            <div onClick={this.likePost} className='likeIcon'>
                <img src='https://image.flaticon.com/icons/svg/149/149217.svg' alt='likes'/>
            </div>
            <div className='commentIcon' >
                <img src='https://image.flaticon.com/icons/svg/25/25663.svg' alt='comment icon'/>
            </div>
        </div>
            <h2>
            {this.state.likes} likes
            </h2>
            {this.state.comments.map(comment => {
            return (
                <div>
                <Comment comment={comment} />
                </div>
            );
            })}
            <div>
            <input
                placeholder="Add a comment..."
                value={this.state.newCommentText}
                onChange={this.onChange}
                onKeyDown={(event) => {
                    if (event.keyCode === 13) {
                        this.addComment()
                    }
                }} 
            />
            </div>
        </div>
        );
    }
}

export default CommentSection;