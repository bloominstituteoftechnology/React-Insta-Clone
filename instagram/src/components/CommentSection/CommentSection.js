import React, { Component } from 'react';
import PropTypes from "prop-types";
import NewComment from './NewComment.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './CommentSection.css';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = props.item;
    }

    addNewComment = (event, index) => {
        event.preventDefault();
        this.setState({ 
            item: [
                ...this.state.item,
                {
                    comment: this.state.newComment
                }
            ],
            newComment: ''
        });
    };

    render() {
        return (
            <div className="commentContainer">
                <div className="commentIcons">
                    <FontAwesomeIcon className="commentIcon" icon={['far', 'heart']} size="2x" />
                    <FontAwesomeIcon className="commentIcon" icon={['far', 'comment']} size="2x" />
                </div>
                <div className="commentSection">
                    <h4>{this.state.likes} likes</h4>
                        
                    <div className="messages">
                        <h4>{this.state.comments[0].username}</h4>
                        <p>{this.state.comments[0].text}</p>
                    </div>
    
                    <div className="messages">
                        <h4>{this.state.comments[1].username}</h4>
                        <p>{this.state.comments[1].text}</p>
                    </div>
    
                    <div className="messages">
                        <h4>{this.state.comments[2].username}</h4>
                        <p>{this.state.comments[2].text}</p>
                    </div>
    
                    <h4>{this.state.timestamp}</h4>
                </div>
                <NewComment newComment={this.state.newComment} addNewComment={this.addNewComment}/>
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