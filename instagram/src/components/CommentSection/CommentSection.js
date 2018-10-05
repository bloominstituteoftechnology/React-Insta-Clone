import React, { Component } from 'react';
import Comment from './Comment';
import AddComment from './AddComment';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './comment.css';

class CommentSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            commentInput: '',

        }
    }

    componentDidMount() {
        this.setState({
            comments: this.props.comments
        })
    }

    addNewComment = (event, index) => {
        event.preventDefault();
    }

    render () {
        return (
            <section className="comment-container">
                <section className="comment-icons">
                    <FontAwesomeIcon icon='heart' />
                    <FontAwesomeIcon icon='comment-alt' />
                </section>
                <p><strong>{this.props.comments.likes} likes</strong></p>
                <section className="comments">
                    {this.props.comments.map(comment => (
                        <div>
                            <Comment user={comment.username}
                                    text={comment.text}/>
                        </div>
                    ))}
                </section>
                <section className="add-comment">
                    <AddComment value={this.props.commentInput} onSubmit={this.props.onSubmit} onChange={this.props.onChange} />
                </section>
            </section>
        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.array,
}

export default CommentSection;