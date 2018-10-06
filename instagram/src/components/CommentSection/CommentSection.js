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
            likes: props.likes,
            text: '',
        }
    }

    componentDidMount() {
        this.setState({
            comments: this.props.comments,
        })
    }

    addLike = () => {
        this.setState({ likes : ++this.state.likes})
    }

    changeHandler = (key, value) => {
        this.setState({ [key] : value })
    }

    submitHandler = (event) => {
        if (event.keyCode === 13 && event.shiftKey === false) {
            if (this.state.text.length >= 1)
              event.preventDefault();
            this.addNewComment(event);
          }
        };

    addNewComment = (event) => {
        if (this.state.text) {
            this.setState({
                comments : [
                    ...this.state.comments,
                    {
                        username : 'cpdis',
                        text: this.state.text,
                    }
                ]
            });
            event.currentTarget.value = null;
        }
    }

    render () {
        return (
            <section className="comment-container">
                <section className="comment-icons">
                    <FontAwesomeIcon icon='heart' onClick={this.addLike} />
                    <FontAwesomeIcon icon='comment-alt' />
                </section>
                <p><strong>{this.state.likes} likes</strong></p>
                <section className="comments">
                    {this.props.comments.map(comment => (
                        <div>
                            <Comment user={comment.username}
                                    text={comment.text}/>
                        </div>
                    ))}
                </section>
                <section>
                    <AddComment value={this.state.newInput} onSubmit={this.submitHandler} 
                                onChange={(event) => this.changeHandler("text", event.target.value)}  />
                </section>
            </section>
        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.array,
}

export default CommentSection;