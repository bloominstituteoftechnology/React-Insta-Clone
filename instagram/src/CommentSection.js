import React from 'react';
import moment from 'moment';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            likes: 0,
            liked: false,
            commenter: false,
            comment: ''
        }
        this.changeModalState = props.changeModalState;
        this.time = props.time;
        this.comments = props.comments;
        this.likes = props.likes;
        this.likeCounter = this.likeCounter.bind(this);
        this.showCommentBox = this.showCommentBox.bind(this);
        this.addComment = this.addComment.bind(this);
        this.updateComment = this.updateComment.bind(this);
    }
    componentDidMount() {
        this.setState({
            comments: this.comments,
            likes: this.likes
        });
    }
    updateComment(e) {
        e.preventDefault();
        this.setState({comment: e.target.value})
    }
    addComment(e) {
        e.preventDefault();
        this.setState((prev) => {
            return {
                comments: prev.comments.concat({username: "dylan", text: this.state.comment}),
                comment: ''
            }
        })
    }
    likeCounter() {
        this.setState((prev) => {
            if (!this.state.liked) {
                return {likes: prev.likes + 1, liked: true}
            }
            if (this.state.liked) {
                return {likes: prev.likes - 1, liked: false}
            }
        });
    }
    showCommentBox() {
        this.setState((prev) => {
            if (!this.state.commenter) {
                return {commenter: true}
            }
            if (this.state.commenter) {
                return {commenter: false}
            }
        });
    }
    reportBox() {

    }
    render() {
    return (
        <div className="comment-section">
            <div className="clickables">
                <div onClick={this.likeCounter} className={this.state.liked ? "red-heart": "heart"}></div>
                <div onClick={this.showCommentBox} className="quote"></div>
            </div>
            <div className="likes">
                {this.state.likes} likes
            </div>
            <ul className="comments">
                {this.state.comments.map((comment) => {
                    return (
                        <li key={comment.text} className="comment">
                            <p className="comment-text"><strong className="comment-name">{comment.username}</strong>{comment.text}</p>
                        </li>
                    )
                })}
            </ul>
            <p className="time">{moment(this.time, 'MMMM DD YYYY, hh:mm:ss a').format('MMMM DD')}</p>
            <form onSubmit={this.addComment} className={this.state.commenter ? "comment-add" : "comment-none"}>
                <input onChange={this.updateComment} value={this.state.comment} type="text" className="comment-input" placeholder="Add a comment..."/>
                <a onClick={this.changeModalState} className="ellipsis"></a>
            </form>
        </div>
    )
    }
}

export default CommentSection;