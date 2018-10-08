import React from 'react';
import PropTypes from "prop-types";
import NewComment from './NewComment.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './CommentContainer.css';
import Moment from 'react-moment';
import 'moment-timezone';

const CommentContainer = props => {
    return (
        <div className="commentContainer">
            <div className="commentIcons">
                <FontAwesomeIcon className="commentIcon" icon={['far', 'heart']} size="2x" />
                <FontAwesomeIcon className="commentIcon" icon={['far', 'comment']} size="2x" />
            </div>
            <div className="commentSection">
                <h4>{props.item.likes} likes</h4>
                    
                <div className="messages">
                    <h4>{props.item.comments[0].username}</h4>
                    <p>{props.item.comments[0].text}</p>
                </div>

                <div className="messages">
                    <h4>{props.item.comments[1].username}</h4>
                    <p>{props.item.comments[1].text}</p>
                </div>

                <div className="messages">
                    <h4>{props.item.comments[2].username}</h4>
                    <p>{props.item.comments[2].text}</p>
                </div>

                <h4>{props.item.timestamp}</h4>
            </div>
            <NewComment />
        </div>
    );
}

CommentContainer.propTypes = {
    item: PropTypes.shape({
        username: PropTypes.string.isRequired,
        comments: PropTypes.arrayOf.isRequired,
        timestamp: PropTypes.string.isRequired,
    })
}

export default CommentContainer;