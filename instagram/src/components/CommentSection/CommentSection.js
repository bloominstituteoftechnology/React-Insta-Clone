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
        this.setState({ likes : this.state.likes + 1 })
    }

    changeHandler = (event) => {
        this.setState({
            text : event.target.value
        })
    }

    submitHandler = (event) => {
        console.log('Submitted.')

        if (this.state.text.length > 0) {
            this.addNewComment(event);
        }
    };

    addNewComment = (event) => {
        event.preventDefault();

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
                    {this.state.comments.map(comment => (
                        <div>
                            <Comment user={comment.username}
                                    text={comment.text}/>
                        </div>
                    ))}
                </section>
                <section>
                    <AddComment value={this.state.newInput} onSubmit={this.submitHandler} 
                                onChange={this.changeHandler}  />
                </section>
            </section>
        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.array,
}

export default CommentSection;