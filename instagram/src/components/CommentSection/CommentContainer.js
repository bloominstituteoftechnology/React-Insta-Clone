import React from 'react';
import PropTypes from "prop-types";
import NewComment from './NewComment.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './CommentContainer.css';

const CommentContainer = props => {
    return (
        <div className="commentContainer">
            <div>
                <FontAwesomeIcon className="linkIcon" icon={['far', 'heart']} size="3x" />
                <FontAwesomeIcon className="linkIcon" icon={['far', 'comment']} size="3x" />
                <h4>{props.item.likes} likes</h4>
                <h4>{props.item.comments[0].username}
                    <p>{props.item.comments[0].text}</p>
                </h4>
                <h4>{props.item.comments[1].username}
                    <p>{props.item.comments[1].text}</p>
                </h4>
                <h4>{props.item.comments[2].username}
                    <p>{props.item.comments[2].text}</p>
                </h4>
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