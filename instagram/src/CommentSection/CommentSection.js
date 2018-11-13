import React from 'react';
import './CommentSection.css';
import CommentForm from './CommentForm'
import PropTypes from 'prop-types';


class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: this.props.comments,
            timestamp: this.props.postTimestamp,
            newComment: '',
        }
    }

    addNewComment = event => {
        event.preventDefault();

        let constructedComment = [...this.state.comments, 
            {
                username: 'testuser03',
                text:  this.state.newComment,
            }];
        

        this.setState({
                comments: constructedComment,
                newComment: '',
            });
        }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return(
            <div>
                {this.state.comments.map(comment => (
                <div className='individual-comment'>
                    <p><span>{comment.username}</span> {comment.text}</p>
                </div>
            ))}
            <p className="timestamp">{this.state.timestamp.toUpperCase()}</p>
            <CommentForm 
                newComment={this.state.newComment} 
                handleChange={this.handleChange}
                addNewComment={this.addNewComment}
            />
            </div>
        );
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
    }))
}

export default CommentSection;