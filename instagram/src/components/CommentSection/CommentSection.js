import React, { Component } from 'react';
import PropTypes from "prop-types";
import NewComment from './NewComment.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './CommentSection.css';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.post.comments,
            newComment: '',
        };
        this.addNewComment = this.addNewComment.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler = event => {
        console.log(event.target.name);
        this.setState({ [event.target.name]: event.target.value });
      };

    addNewComment = (event, index) => {
        console.log('before new comment')
        event.preventDefault();
        this.setState({ 
            comments: [
                ...this.state.comments,
                {
                    username: 'Shawn',
                    text: this.state.newComment,
                }
            ],
            newComment: ''
        });
        console.log('after new comment')
    };

    render() {
        return (
            <div className="commentContainer">
                <div className="commentIcons">
                    <FontAwesomeIcon className="commentIcon" icon={['far', 'heart']} size="2x" />
                    <FontAwesomeIcon className="commentIcon" icon={['far', 'comment']} size="2x" />
                </div>
                
                <h4 className='likes'>{this.props.post.likes} likes</h4>
                
                {this.state.comments.map((post) => {
                    return (
                        <div className="commentSection">
                                
                            <div className="messages">
                                <h4>{this.props.post.comments[0].username}</h4>
                                <p>{this.state.comments[0].text}</p>
                            </div>
            
                            <h4>{this.state.timestamp}</h4>
                        </div>
                    );
                })}
                <NewComment newComment={this.state.newComment} addNewComment={this.addNewComment} changeHandler={this.changeHandler}/>
            </div>
        );
    }
}

CommentSection.propTypes = {
    item: PropTypes.shape({
        username: PropTypes.string.isRequired,
        comments: PropTypes.arrayOf.isRequired,
        timestamp: PropTypes.string.isRequired,
    })
}

export default CommentSection;