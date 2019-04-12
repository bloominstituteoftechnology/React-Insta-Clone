import React, {Component} from "react"
import Comment from './Comment'
import PropTypes from "prop-types"
import "./CommentSection.css"
import dots from "../images/instaIMG/dots.png"

class CommentSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newCommentText: ""
        }
    }

    handleChanges = (e) => {
        this.setState({ newCommentText: e.target.value})
    }

    submitComment = (e) => {
        e.preventDefault()
        this.props.newCommentSubmitted(this.state.newCommentText)
        console.log(this.props.comments)
        this.setState ({ newCommentText: ""})
    }

    render() {
        return (
            <div className="commentSection">
            {this.props.comments.map((comment) => (
                <Comment username={comment.username} text={comment.text} key={comment.id} id={comment.id} />
            ))}
            <p>{this.props.timestamp}</p>
            <div className="addComment">
            <form onSubmit={this.handleChanges.submitComment}>
            <input 
                className="addCommentInput"
                type="text"
                placeholder="Add a comment..."
                value={this.state.newCommentText}
                onChange={this.handleChanges.handleChanges}
                />
                </form>
                <img className="dots" src={dots} alt="comment dots" />
                </div>
            </div>
        )
    }
}

CommentSection.protoTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            username: PropTypes.string,
            text: PropTypes.string
        })
    )
}

export default CommentSection;