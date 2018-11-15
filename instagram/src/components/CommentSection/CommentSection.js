import React from 'react';
import { IndividualComment, Timestamp } from './StyledCommentSection';
import CommentForm from './CommentForm';
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
                {this.state.comments.map((item, index) => (
                        <IndividualComment key={index}>
                            <p><span>{item.username}</span> {item.text}</p>
                        </IndividualComment>
                ))}
                <Timestamp>{this.state.timestamp.toUpperCase()}</Timestamp>
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
    timestamp: PropTypes.string,
    newComment: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }))
}

export default CommentSection;