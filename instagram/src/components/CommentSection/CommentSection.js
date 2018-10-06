import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment.js';
import './CommentSection.css';

class CommentSection extends Component  {
    state = {
        content: [],
        timestamp: "",
        input: ""
    }

    componentDidMount() {
        this.setState((state)   =>  ({
            content: this.props.content,
            timestamp: this.props.timestamp,
        }))
    }

    inputChangeHandler = ({target}) =>  {
        this.setState((state)   =>  ({
            input: target.value,
        }))
    }

    addComment(event)    {
        event.preventDefault();
        let newContent  =   this.state.content;
        newContent.push({username: "Ryntak", text: this.state.input})
        this.setState((state)   =>  ({
            content: newContent,
        }))
    }

    render()    {
        return(
            <div>
                <div className="commentSection">
                    {this.state.content.map((comment, index)    =>  {
                        return <Comment key={index} username={comment.username} text={comment.text}/>
                    })}
                    <div className="timestamp">{this.state.timestamp}</div>
                </div>
                <div className="addComment">
                    <form onSubmit={event => this.addComment(event)}>
                        <input onChange={this.inputChangeHandler} className="commentInput" placeholder="Add a comment..."></input>
                    </form>
                    <i className="fas fa-ellipsis-h fa-lg"></i>
                </div>

            </div>
        )
    }
}

CommentSection.propTypes = {
    content: PropTypes.array.isRequired,
    timestamp: PropTypes.string.isRequired
}

export default CommentSection;
