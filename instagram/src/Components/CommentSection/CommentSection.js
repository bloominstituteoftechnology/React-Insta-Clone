import React from 'react'
import Comments from './Comments'
import './CommentSection.css'

class CommentSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: props.comments,
            newComments: ''
        }
    }

    componentDidMount() {
        const id = this.props.postId;
        if (localStorage.getItem(id)) {
          this.setState({
            comments: JSON.parse(localStorage.getItem(this.props.postId))
          });
        } else {
          this.setComments();
        }
    }
    
    componenetWillUnmount() {
        this.setComments();
    }

    setComments = () => {
        localStorage.setItem(
            this.props.postId,
            JSON.stringify(this.state.comments)
        )
    }

    commentChangeHandler = event => {
        this.setState({ newComments: event.target.value })
    }

    submitCommentHandler = event => {
        event.preventDefault()
        const newComment = { text: this.state.newComments, username: 'ynafey'}
        const comments = this.state.comments.slice()
        comments.push(newComment)
        this.setState({ comments, newComment: '' })
        setTimeout(() => {
            this.setComments()
        }, 500)
    }

    render () {
        return (
            <div className="comment-section">
                <div className="top">
                    {this.state.comments.map((item, index) => {
                        return (
                            <Comments 
                                key={index}
                                comments={item}
                            />
                        )
                    })}
                </div>
                <hr></hr>
                <form 
                    className="bottom" 
                    onSubmit={this.submitCommentHandler}
                >
                    <input 
                        onChange={this.commentChangeHandler}
                        type="text"
                        value={this.state.newComments}
                        placeholder="Add a comment..."
                        className="comment-input"
                    />
                    <i className="fas fa-ellipsis-h"></i>
                </form>
            </div>
        )
    }
    
}

export default CommentSection