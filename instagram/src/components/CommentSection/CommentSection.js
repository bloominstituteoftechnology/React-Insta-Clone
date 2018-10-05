import React, { Component } from 'react';
import Comment from './Comment';
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
                    <input placeholder=" Add a comment..."/>
                    <FontAwesomeIcon icon='ellipsis-h'/>
                </section>
            </section>
        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.array,
}

export default CommentSection;