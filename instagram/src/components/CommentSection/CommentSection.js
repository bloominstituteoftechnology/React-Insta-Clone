import React from "react";
import PropTypes from "prop-types"
import Comments from "./Comments"
import CommentInput from "./CommentInput"

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ""
        };
    }

    commentHandler = e => {
        this.setState({comment: e.target.value})
    };

    commentSubmit = e => {
        e.preventDefault();
        const newComment = { text: this.state.comment, username: "nice meme"};
        const comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({comment: "", comments});
    };

    render() {
        return (
            <div>
                {this.state.comments.map((comments, i) => <Comments key={i} comments={comments}/>)}
                <CommentInput
                submitHandler={this.commentSubmit}
                changeHandler={this.commentHandler}
                comment={this.state.comment}
                />
            </div>
        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({ text: PropTypes.string, username: PropTypes.string})
    )
};


export default CommentSection;

/* Pre-refactor 

const CommentSection = (props) => {
    console.log(props.comments)
    return (
        <div>
            {props.comments.map((comments, i) => {
                return <div>
                    <Comments key={i} comments={comments}/>
                    </div>
            })}
            <CommentInput/>
        </div>
    )
} */