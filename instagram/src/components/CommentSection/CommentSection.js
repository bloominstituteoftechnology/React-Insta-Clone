import React from 'react';
import PropTypes from 'prop-types';
import Likes from './Likes';
import Timestamp from './Timestamp';
import AddComment from './AddComment';
import Comments from './Comments';

import '../CommentSection/CommentSection.css';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: props.comments,
            id: props.id,
            likes: props.likes,
            newComment: "",
            timestamp: props.timestamp
        }
    }

    changeHandler = (event) => {
        this.setState({ newComment: event.target.value });
    }

    addNewComment = (event) => {
        event.preventDefault();
        if(this.state.newComment !== ""){
            this.setState({
                comments: [
                    ...this.state.comments,
                    {
                        username: "defaultUsername",
                        text: this.state.newComment
                    }
                ],
                newComment: ""
            });
        }
    }

    render() {
        return (
            <div className="comment-section">
                <Likes likes={this.state.likes} />
                <Comments comments={this.state.comments} id={this.state.id} />
                <Timestamp timestamp={this.state.timestamp} />
                <AddComment
                    addNewComment={this.addNewComment}
                    changeHandler={this.changeHandler}
                    comments={this.state.comments}
                    id={this.state.id}
                    newComment={this.state.newComment}
                />
            </div>
        );
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        })),
    likes: PropTypes.number,
    timestamp: PropTypes.string
}

export default CommentSection;