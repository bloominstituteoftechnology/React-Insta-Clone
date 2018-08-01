import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';



class CommentSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            commentState: [],
            input: ""
        }
    }
    componentDidMount() {
        this.setState(
            { commentState: this.props.comments });
    }

    addNewComment(event, indexNumber) {

        const commentSlice = this.state.commentState.slice();
        commentSlice.push({
            newComment: this.state.input,
        });

        this.setState({ commentState: commentSlice });
        this.setState({ input: "" });
    };



    render() {
        return (
            <div>
                {this.props.comments.map(comment => {
                    return (
                        <div className="commentContent"> <p>
                            <span className="commentUser">{comment.username} </span>
                            {comment.text}
                        </p>
                        </div>

                    )
                }

                )}
                
                <form>
                    <input addNewComment={this.addNewComment} className="commentInput" placeholder="Add a comment..." />
                </form>
            </div>
        );
    }
}
CommentSection.propTypes = {
    comments: PropTypes.array
}

export default CommentSection;